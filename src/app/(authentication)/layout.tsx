import React from 'react'
import LogoBlack from '@/public/images/logo-black.png';
import LogoWhite from '@/public/images/logo-white.png';
import Image from 'next/image';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            {/* <div className="flex gap-4 items-center mb-[20px]">
                <Image src={LogoBlack} alt="GradeFlow Logo" width={64} height={64} className="inline-block dark:hidden" />
                <Image src={LogoWhite} alt="GradeFlow Logo" width={64} height={64} className="hidden dark:inline-block" />
                <h1 className="font-[var(--font-inter)] text-[#000] dark:text-[white] text-4xl font-bold max-[390px]:text-[24px] max-[338px]:hidden">GradeFlow</h1>
            </div> */}
            {children}
        </div>
    )
}

export default layout
