import { ContactUs } from '@/app/components/ContactUs';
import { Footer } from '@/app/components/Footer';
import { Navbar } from '@/app/components/Navbar';
import React from 'react'

const Page = () => {
  return (
   
    <main className="flex min-h-screen flex-col p-10 bg-[#FFFFFF]">
       
        <Navbar />

        <ContactUs />
       
        <Footer/>
        
    </main>
  )
}


export default Page;