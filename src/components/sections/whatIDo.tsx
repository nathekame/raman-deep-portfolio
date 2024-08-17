
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import WhatIDo from "@/data/what-i-do";




const WhatIDoSection: React.FC = () => {


    return (
        <div>
                <div className="flex gap-2 my-5">
                    <h1 className="font-semibold text-2xl">What I Do </h1> <hr className=" mt-3 border-2 w-10 border-primary" />

                </div>


                <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-1">

                {WhatIDo.items.map(d => (

                    <Card key={d.id} className="p-4 bg-secondary">
                        <CardTitle>{d.name}</CardTitle>
                        <CardDescription className="mt-2">{d.Description}</CardDescription>
                    </Card>

                ))}


                </div>
        </div>
    );
}

export default WhatIDoSection;



