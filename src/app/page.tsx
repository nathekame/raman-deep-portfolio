'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from 'next/link'

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Badge } from "@/components/ui/badge"



import WhatIDo from "@/data/what-i-do"
import Clients from "@/data/clients"
import Education from "@/data/education"
import Experience from "@/data/experience"
import Works from "@/data/works"


import Image from 'next/image'


import { useState } from 'react';
import AboutMeSection from "@/components/sections/aboutMe"
import WhatIDoSection from "@/components/sections/whatIDo"
import ClientSection from "@/components/sections/clients"
import EducationSection from "@/components/sections/education"
import ExpereinceSection from "@/components/sections/experience"
import SkillSection from "@/components/sections/skills"
import FamiliarToolsSection from "@/components/sections/familiarTools"
import WorkSection from "@/components/sections/works"
import ContactMeSection from "@/components/sections/contactMe"




 


export default function Home() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <main className="lg:container">
      
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div className="col-span-1">
              <div className="p-1">

                <Card className="bg-secondary ml-5 max-w-full lg:p-3 ">
                <div className="flex justify-center p-5">
              <Avatar className="h-40 w-40">
                <AvatarImage src={'/img/passport_photo.jpeg'}  alt="photo" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>

              </div>
                  <CardTitle className="flex justify-center mb-2 text-center">Raman Deep</CardTitle>
                  <div className="flex justify-center text-lg font-medium">Machine Learning Engineer</div>
                  <CardHeader>


                    <div className="flex justify-center gap-5">

                   
                         {/* <!-- Github --> */}
                         <Link href="https://github.com/nathekame">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="currentColor"
                              style={{ color: "#333" }}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>

                          </Link>

                          {/* <!-- Linkedin --> */}
                          <Link href="https://www.linkedin.com/in/norbert-athekame-7a55a63b">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            style={{ color: "#0077b5" }}
                            viewBox="0 0 24 24"
                            >
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                          </Link>

                          {/* <!-- Twitter --> */}
                          <Link href="https://x.com/nathekame?t=XQ5qXRWNtWBhW8W7XerTuA&s=09">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            style={{ color: "#1da1f2" }}
                            viewBox="0 0 24 24"
                            >
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          </Link>

                     </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        <TableRow>
                          {/* <TableCell className=" font-medium text-base flex gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                          </svg>
                            Phone Number: +1 (437) 229 5208</TableCell> */}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-base flex gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                          </svg>

                            Location: Ontario, Canada
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-base flex gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                            </svg>

                            Email: 
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                  </CardContent>
                  <CardFooter className="flex justify-center">
                       {/* <Link href="resume.pdf" target="_blank" className="font-semibold text-sm flex justify-end">
                        <Button>Download My Resume</Button>
                       </Link> */}

                       
                  </CardFooter>
                
                </Card>
                
              </div>
            </div>
            <div className=" col-span-2">
              <Card className="">


              <Tabs defaultValue="home" className="">

              <div className="lg:hidden flex justify-start m-5">
                         {/* Hamburger button for small screens */}
                      <button
                        id="hamburger"
                        className="lg:hidden px-2 py-1"
                        onClick={toggleMenu}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          ></path>
                        </svg>
                      </button>
                </div>


              <div className="lg:flex justify-end lg:w-auto">

                {/* Normal menu list for large screens */}
                  <nav className={` lg:flex space-x-4 ${menuOpen ? 'hidden' : ''}`}>

              
                        <TabsList className=" bg-transparent lg:bg-secondary text-2xl">
                          {/* <div  className="grid lg:flex p-4"> */}
                          
                          {/* <TabsTrigger value="resume" className="text-lg justify-start gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                          </svg>

                            Resume
                          </TabsTrigger> */}
                          {/* <TabsTrigger value="works" className="text-lg justify-start gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                          </svg>
                            Projects
                          </TabsTrigger> */}
                          {/* <TabsTrigger value="contact-me" className="text-lg justify-start gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                          </svg>
                            Contact Me
                          </TabsTrigger> */}
                          {/* </div> */}
                          
                        </TabsList>
                </nav>

              </div>




              <TabsContent value="home" className={`p-5 ${menuOpen ? 'mt-0' : ' mt-14'}`}>
                <div >
                  {/* <AboutMeSection />      */}
                  <WorkSection />

                </div>
                <div className="">
                  {/* <WhatIDoSection /> */}
                </div>
                <div className="">
                  {/* <ClientSection /> */}
                </div>
              </TabsContent>
              <TabsContent value="resume" className={`p-5 ${menuOpen ? 'mt-0' : ' mt-14'}`}>
                <div className="grid lg:grid-cols-2 gap-5">
                  <ExpereinceSection />
                  <EducationSection />
                </div>
                <div className="grid lg:grid-cols-2 mt-7 gap-5">
                  <SkillSection />
                  <FamiliarToolsSection />
                </div>

              </TabsContent>
              <TabsContent value="works" className={`p-5 ${menuOpen ? 'mt-0' : ' mt-14'}`}>

                 {/* <WorkSection /> */}

              </TabsContent>
              <TabsContent value="contact-me" className={`p-5 ${menuOpen ? 'mt-0' : ' mt-14'}`}>
                <ContactMeSection />
              </TabsContent>

              </Tabs>

                 

              </Card>
            </div>

          </div>
    </main>
  );
}

