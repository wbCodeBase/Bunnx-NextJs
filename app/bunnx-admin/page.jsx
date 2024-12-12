"use client"
import React from 'react'
import AdminpanelLayout from "@/components/adminpanel/AdminpanelLayout";
import "./template.css";

// import { auth } from "@/auth";
// import { redirect } from "next/navigation"

const Adminpanel = () => {

  // const session = await auth()
  // if(!session?.user) redirect("/login")

  return (
    <>

      <AdminpanelLayout>
        <div className='flex justify-center text-center items-center text-4xl h-screen'>Welcome to Bunnx AdminPanel</div>
      </AdminpanelLayout>

    </>
  )
}

export default Adminpanel


