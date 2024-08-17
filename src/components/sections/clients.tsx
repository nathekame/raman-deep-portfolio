import React from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';

import Clients from "@/data/clients"




const ClientSection: React.FC = () => {


    return (
        <div>

                <div className="flex gap-2 my-5">
                   <h1 className="font-semibold text-2xl">Clients/Brands I have worked with/for </h1> <hr className=" mt-3 border-2 w-10 border-primary" />
                </div>

                <div className="flex justify-center">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-1">

                  {Clients.items.map(d => (

              
                    <CarouselItem key={d.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center mt-2 ">

                        <Image
                          src={`/img/${d.logo}`}
                          width={200}
                          height={200}
                          className=" rounded"
                          alt="Logo Of Client"
                        />

                        

       
                        </CardContent>
                        {/* <CardFooter>{d.name}</CardFooter> */}
                      </Card>
                    </div>
                    </CarouselItem>


                  ))}


                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                </div>
                
        </div>
    );
}

export default ClientSection;