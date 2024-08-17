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
import { ContactForm } from '../forms/contactForm';



const ContactMeSection: React.FC = () => {


    return (
        <div>
              <div className="flex gap-2 mb-5">
                  <h1 className="font-semibold text-2xl">Contact Me </h1> <hr className="mt-3 border-2 w-10 border-primary"  />
                 

                  </div>
                  <ContactForm />
        
        </div>
    );
}

export default ContactMeSection;