"use client"
import React from 'react'
import LogoBlack from '@/public/images/logo-black.png'
import LogoWhite from '@/public/images/logo-white.png'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Navbar() {
  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="text-white p-4 w-full border-b border-black/10 dark:border-white/10 bg-gradient-to-b from-[#e9f0ff] to-[#dce8ff] dark:from-[#0b1220] dark:to-[#111827]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className='flex items-center gap-1 '>
            <Image src={LogoBlack} alt="GradeFlow Logo" width={32} height={32} className="inline-block dark:hidden" />
            <Image src={LogoWhite} alt="GradeFlow Logo" width={32} height={32} className="hidden dark:inline-block" />
            
            <h1 className="font-[var(--font-inter)] text-[#000] dark:text-[white] text-[20px] font-bold max-[390px]:text-[15px] max-[338px]:hidden">GradeFlow</h1>
          </Link>
          <div className="flex items-center gap-6">
            <ul className='hidden gap-6 min-[620px]:flex'>
              <li
                onClick={scrollToFeatures}
                className='cursor-pointer text-[15px] font-medium text-[#000] dark:text-[white] hover:text-[#0046FF] transition-all duration-200'
              >
                Features
              </li>
              <li
                onClick={scrollToHowItWorks}
                className='cursor-pointer text-[15px] font-medium text-[#000] dark:text-[white] hover:text-[#0046FF] transition-all duration-300'
              >
                How it works
              </li>
            </ul>
            <span className="text-[#000] dark:text-white max-[774px]:hidden">|</span>
            <div className="hidden min-[774px]:block">
              <ThemeSwitch />
            </div>
            <span className="text-[#000] dark:text-white max-[774px]:hidden">|</span>
            <div className='flex gap-2 min-[390px]:gap-6'>
              <Link href={'/login'} className="bg-[#0046FF] w-[90px] h-[40px] flex items-center justify-center font-medium text-white font-bold py-2 px-4 rounded-[10px] border border-[#0046FF] cursor-pointer max-[390px]:text-[12px] tracking-normal text-[white] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-[#0046FF] text-[14px]">Login</Link>
              <Link href={'/signup'} className="bg-[#0046FF] w-[90px] h-[40px] flex items-center justify-center font-medium text-white font-bold py-2 px-4 rounded-[10px] border border-[#0046FF] cursor-pointer max-[390px]:text-[12px] tracking-normal text-[white] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-[#0046FF] text-[14px]">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
