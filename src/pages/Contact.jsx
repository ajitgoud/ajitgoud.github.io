import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="h-full flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-16 ">
    <div className="flex-1  space-y-8 md:space-y-16">
      <h1 className="text-4xl underline decoration-app-green underline-offset-8">
        Contact
      </h1>
      
    </div>
    <Footer />
  </div>

  )
}
