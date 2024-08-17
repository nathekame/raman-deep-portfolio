import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import Education from "@/data/education"


const EducationSection: React.FC = () => {


    return (
        <div className="">
 <div className="col-span-1">

<div className="flex gap-2 mb-5">
<h1 className="font-semibold text-2xl">Education </h1> <hr className="mt-3 border-2 w-10 border-primary"  />

</div>

{Education.items.map(d => (


      <Card key={d.id} className="my-2 bg-secondary">
        <CardHeader className="font-semibold text-lg">
         {d.degree}
        </CardHeader>
        <CardContent className="font-semibold text-sm">{d.name}</CardContent>

        <CardFooter className="font-semibold text-sm">{d.year}</CardFooter>
      </Card>


    ))}


</div>
        </div>
    );
}

export default EducationSection;