"use client"
import React, { use } from 'react'
import Logo from '@/public/images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="text-white p-4 bg-[#070f2bb1] backdrop-blur-[12px] fixed w-full z-10 border border-[rgba(0,0,0,0.05)]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className='flex items-center gap-1 '>
            <Image src={Logo} alt="GradeFlow Logo" width={32} height={32} className="inline-block" />
            <h1 className="font-[var(--font-inter)] text-[#fff] text-[20px] font-bold max-[390px]:text-[15px]">GradeFlow</h1>
          </Link>
          <div className="flex items-center gap-6">
            <ul className='hidden gap-6 min-[620px]:flex'>
              <li className='cursor-pointer text-[16px] font-medium text-[#fff]'>Features</li>
              <li className='cursor-pointer text-[16px] font-medium text-[#fff]'>How it works</li>
            </ul>
            <button></button>
            <div className='flex gap-2 min-[390px]:gap-6'>
              <Link href={'/'} className="bg-[#372387] w-[90px] h-[40px] flex items-center justify-center text-[16px] font-medium text-white font-bold py-2 px-4 rounded-[13px] cursor-pointer max-[390px]:text-[12px] leading-none tracking-normal text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#535C91]">Login</Link>
              <Link href={'/'} className="bg-[#372387] w-[90px] h-[40px] flex items-center justify-center text-[16px] font-medium text-white font-bold py-2 px-4 rounded-[13px] cursor-pointer max-[390px]:text-[12px] tracking-normal text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#535C91]">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
