import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Experience from "@/data/experience"



const ExpereinceSection: React.FC = () => {


    return (
        <div className="col-span-1">

        <div className="flex gap-2 mb-5">
        <h1 className="font-semibold text-2xl">Experience </h1> <hr className="mt-3 border-2 w-10 border-primary"  />

        </div>

        {Experience.items.map(d => (

    
                  <Card key={d.id} className="my-2 bg-secondary">
                      <CardHeader className="font-semibold text-sm py-1 pt-3">
                 {d.year}
                </CardHeader>
                <CardContent className="font-semibold text-lg py-2">{d.role}</CardContent>

                <CardFooter className="font-semibold text-sm">{d.name}</CardFooter>
                  </Card>

            ))}

        </div>
    );
}

export default ExpereinceSection;