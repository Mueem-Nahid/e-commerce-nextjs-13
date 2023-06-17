import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import {Inter} from 'next/font/google'
import Head from "@/components/head/Head";
import dynamic from "next/dynamic";

const inter = Inter({subsets: ['latin']})

const Navbar = dynamic(() => import("../components/navbar/Navbar"), {ssr: false});

export default function RootLayout({children}) {
   return (
      <html lang="en">
      <body className={inter.className}>
      <Head/>
      <Navbar/>
      {children}
      </body>
      </html>
   )
}
