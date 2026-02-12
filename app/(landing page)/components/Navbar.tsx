"use client"
import React, { use } from 'react'
import Logo from '@/public/images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="text-white p-4 bg-[#0f172a89] backdrop-blur-[12px] fixed w-full z-10 border border-[rgba(0,0,0,0.05)]">
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
            <div className='flex gap-2 min-[390px]:gap-6'>
              <Link href={'/'} className="bg-[#1c3774] text-[16px] font-medium text-white font-bold py-2 px-4 rounded-[15px] cursor-pointer max-[390px]:text-[12px]">Login</Link>
              <Link href={'/'} className="bg-[#1c3774] text-[16px] font-medium text-white font-bold py-2 px-4 rounded-[15px] cursor-pointer max-[390px]:text-[12px]">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
