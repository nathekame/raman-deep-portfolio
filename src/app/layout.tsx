
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TProvider from "./themeProvider";
import ThemeButton from "@/components/partials/ThemeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Raman Deep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <TProvider>
            <div className="p-1">
            <nav className=" mb-5  flex justify-end"> 
              {/* <h1 className=" text-2xl">Norbert Osi Athekame</h1> */}
              {/* <ThemeButton /> */}
            </nav>
            {children}
            </div>
          </TProvider>
        </body>
      
        
    </html>

  );
}

