'use client'

import { ThemeProvider } from 'next-themes';


const TProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
     );
}
 
export default TProvider;