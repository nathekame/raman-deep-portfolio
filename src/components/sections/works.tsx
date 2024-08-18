import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Works from "@/data/works";
  import { Button } from "@/components/ui/button";



const WorkSection: React.FC = () => {


    return (
        <div>
              <div className="flex gap-2 mb-5">
                  <h1 className="font-semibold text-2xl">My Projects </h1> <hr className="mt-3 border-2 w-10 border-primary"  />

                  </div>
          <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                {Works.items.map(d => (

                            

                    <Card key={d.id} className="p-4 pb-2">
                    <CardTitle className="flex justify-center">{d.title}</CardTitle>
                    <CardContent className="flex justify-center pt-2">
                    <Image
                          src={`/img/${d.screenshot}`}
                          width={400}
                          height={200}
                          className=" rounded"
                          alt="Screenshot"
                        />
                    </CardContent>
                    <CardDescription className="mt-1  text-justify">{d.description}</CardDescription>

                    {/* <CardFooter className="font-semibold text-sm my-2 flex justify-end"> */}
                    <div>

                      

                    {/* <Link href={d.url} target="_blank" className="font-semibold text-sm mt-2 flex justify-end">
                          <Button className="pt-2">Visit</Button>
                       </Link> */}

                    </div>
                     
                    {/* </CardFooter> */}

                    </Card>


                ))}

                </div>



              <div className="m-3">
                <Link href="https://github.com/kaushalrmn?tab=repositories" target="_blank" className="font-semibold text-base flex justify-end">
                   Click here to see more projects on my github repositories page
                </Link>
              </div>
        </div>
    );
}

export default WorkSection;