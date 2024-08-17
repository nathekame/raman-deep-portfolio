import React from 'react';
import { Badge } from "@/components/ui/badge"


const FamiliarToolsSection: React.FC = () => {


    return (
        <>
            <div className="col-span-1">
                <div className="flex gap-2 mb-5">
                <h1 className="font-semibold text-2xl">Some Tools I Am Familiar With </h1> <hr className="mt-3 border-2 w-10 border-primary"  />


                </div>

                  <Badge variant="destructive" className="mx-1">Python</Badge>
                  <Badge variant="destructive" className="mx-1">Tensorflow</Badge>
                  <Badge variant="destructive" className="mx-1">Jupiter</Badge>
                  <Badge variant="destructive" className="mx-1">PyTorch</Badge>
            </div> 
        </>
    );
}

export default FamiliarToolsSection;


