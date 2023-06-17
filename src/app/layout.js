import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import {Inter} from 'next/font/google'
import Head from "@/components/head/Head";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({subsets: ['latin']})

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
