"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
    return (
   <div className='h-screen w-screen flex items-center justify-center'>
     <button className='text-6xl' onClick={()=> router.back()}>404 - Go back </button>

   </div>  )
}

export default NotFound