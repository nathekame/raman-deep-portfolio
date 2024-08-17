import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


import { MailCheck, AlertCircle } from "lucide-react"

 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"




import config from "@/config/config"
import sendEmail from "@/util/apiRequest"
import { useState } from "react"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("This is not a valid email.").min(2, {
    message: "EMail must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  // ...

  const [alertState, setAlertState] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<boolean>(false);



  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)

    const data = {
        sender: config.EMAIL_SENDER,
        receiver: config.EMAIL_RECEIVER,
        subject: `Message From ${values.name} - ${values.email}`,
        body: values.message,
      };

      const SendEm = await sendEmail(config.MAIL_URL, data);

      if (SendEm) {
        // display an alert on the screen to show seccessfula dn the clear out the form
        setAlertState(true)

        setTimeout(() => {
            setAlertState(false)
        }, 2000);
        form.reset();
      }
      if (!SendEm) {
        // display an alert on the screen to show seccessfula dn the clear out the form
        setErrorState(true)

        setTimeout(() => {
            setErrorState(false)
        }, 2000);
        form.reset();
      }


    //   if (SendEm) {
    //     return (
    // //         <Alert>
    // //   <Terminal className="h-4 w-4" />
    // //   <AlertTitle>Heads up!</AlertTitle>
    // //   <AlertDescription>
    // //     You can add components to your app using the cli.
    // //   </AlertDescription>
    // // </Alert>
    //     )
        
    //   }

      console.log(SendEm);
    
    
      return SendEm;



  }

  return (
    <Form {...form}>
        <FormDescription className=" justify-start mb-5 text-lg">
           Send me a message
        </FormDescription>
     
        <FormDescription className=" justify-start mb-5 text-lg">
           {alertState ? (

             <Alert>
                <MailCheck className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    Thank you for your message, i will respond as sson as i can...
                </AlertDescription>
            </Alert>

           ) : null}

        {errorState ? (

            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                Sorry, your message wasnt sent, please try again.
                </AlertDescription>
            </Alert>

        ) : null}
        </FormDescription>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Send Message</Button>

        </div>
      </form>
    </Form>
  )
}
