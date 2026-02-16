"use client"
import React, { use } from 'react'
import Logo from '@/public/images/logo-white.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="text-white p-4 bg-[#000]  w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className='flex items-center gap-1 '>
            <Image src={Logo} alt="GradeFlow Logo" width={32} height={32} className="inline-block" />
            <h1 className="font-[var(--font-inter)] text-[#fff] text-[20px] font-bold max-[390px]:text-[15px] max-[338px]:hidden">GradeFlow</h1>
          </Link>
          <div className="flex items-center gap-6">
            <ul className='hidden gap-6 min-[620px]:flex'>
              <li className='cursor-pointer text-[15px] font-medium text-[#7E7E7E] hover:text-white transition-all duration-200'>Features</li>
              <li className='cursor-pointer text-[15px] font-medium text-[#7E7E7E] hover:text-white transition-all duration-200'>How it works</li>
            </ul>
            <button></button>
            <div className='flex gap-2 min-[390px]:gap-6'>
              <Link href={'/'} className="bg-[#000000] w-[90px] h-[40px] flex items-center justify-center font-medium text-white font-bold py-2 px-4 rounded-[10px] border border-white cursor-pointer max-[390px]:text-[12px] tracking-normal text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-[black] text-[14px]">Login</Link>
              <Link href={'/'} className="bg-[#000000] w-[90px] h-[40px] flex items-center justify-center font-medium text-white font-bold py-2 px-4 rounded-[10px] border border-white cursor-pointer max-[390px]:text-[12px] tracking-normal text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-[black] text-[14px]">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
