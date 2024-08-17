import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"





const SkillSection: React.FC = () => {


    return (
        <div>
 <div className=" col-span-1">
                  <div className="flex gap-2 mb-5">
                  <h1 className="font-semibold text-2xl">Core Skills </h1> <hr className="mt-3 border-2 w-10 border-primary"  />

                  </div>
                  <div>
                  <Table className="">
                      <TableBody>
                        <TableRow>
                          <TableCell className=" font-medium text-base py-2">Operation Systems: 
                          <Badge variant="destructive" className=" mx-1">Windows</Badge>
                          <Badge variant="destructive" className="mx-1">Linux</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow className=" py-0">
                          <TableCell className="font-medium text-base py-2">Frontend Programming: 
                           <Badge variant="destructive" className="ml-0.5">HTML</Badge>
                           <Badge variant="destructive" className="">CSS</Badge>
                           <Badge variant="destructive" className="ml-0.5">Javascript</Badge>
                           <Badge variant="destructive" className="ml-0.5">ReactJS</Badge>
                           <Badge variant="destructive" className="ml-0.5">NextJS</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-base py-2">Backend Programming: 
                          <Badge variant="destructive" className="mx-1">NodeJS</Badge>
                           <Badge variant="destructive" className="mx-1">ExpressJS</Badge>
                           <Badge variant="destructive" className="mx-1">Fast API</Badge>
                          </TableCell>
                          </TableRow>
                          <TableRow>
                          <TableCell className="font-medium text-base py-2">Database Management: 
                          <Badge variant="destructive" className="mx-1">MySql</Badge>
                           <Badge variant="destructive" className="mx-1">MariaDB</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-base py-2">Cloud Technologies: 
                          <Badge variant="destructive" className="mx-1">AWS</Badge>
                           <Badge variant="destructive" className="mx-1">Vercel</Badge>
                           <Badge variant="destructive" className="">Digital Ocean</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-base py-2">Version Control: 
                          <Badge variant="destructive" className="mx-1">Git</Badge>
                           <Badge variant="destructive" className="mx-1">GitHub</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                  </div>
                  </div>
                 
        </div>
    );
}

export default SkillSection;