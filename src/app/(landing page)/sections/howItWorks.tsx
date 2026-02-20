import React from 'react'
import LiquidCard from '../../components/ui/LiquidCard';
import { ChartNoAxesCombined, Share2, ShieldCheck } from 'lucide-react';

export default function howItWorks() {
  return (
    <section id="how-it-works" className="w-full my-[20px] scroll-mt-24">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className='capitalize text-4xl text-[#0F2854] font-bold dark:text-[white]'>how it works</h1>
        <p className='text-[#0F2854] dark:text-[white] mt-6 opacity-70'>Replace paper tests in three simple steps</p>
        <div className='grid gap-6 md:grid-cols-3 mt-10 max-w-[90%]'>
          <LiquidCard>
            <div className='w-full h-[100px] flex flex-col items-center justify-center'>
              <h2 className="mt-2 text-[30px] text-[#0F2854]  font-bold dark:text-white flex items-center gap-[7px] max-[1020px]:text-[25px]">Create Your Test <ShieldCheck /></h2>
              <p className="text-center mt-3 text-sm text-slate-700 dark:text-slate-200 max-[1030px]:text-[12px]">Build quizes in minutes. Add questions and set time limit.</p>
            </div>
          </LiquidCard>
          <LiquidCard>
            <div className='w-full h-[100px] flex flex-col items-center justify-center'>
              <h2 className="mt-2 text-[30px] text-[#0F2854]  font-bold dark:text-white flex items-center gap-[7px] max-[1020px]:text-[25px]">Share with Students <Share2 /></h2>
              <p className="text-center mt-3 text-sm text-slate-700 dark:text-slate-200 max-[1030px]:text-[12px]">Send a test link or code. No printing needed.</p>
            </div>

          </LiquidCard>
          <LiquidCard>
            <div className='w-full h-[100px] flex flex-col items-center justify-center'>
              <h2 className="mt-2 text-[30px] text-[#0F2854] font-bold dark:text-white flex items-center gap-[7px] max-[1030px]:text-[25px]">Get Instant Results <ChartNoAxesCombined /></h2>
              <p className="text-center mt-3 text-sm text-slate-700 dark:text-slate-200 max-[1030px]:text-[12px]">Automatic grading and real-time analytics.</p>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  )
}
