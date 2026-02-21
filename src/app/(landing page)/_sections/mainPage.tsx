import React from 'react'

function mainPage() {
    return (
        <section className="w-full my-[20px] min-h-[60vh] flex flex-col items-center justify-center" id='feature'>
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-5xl text-[#0F2854] font-bold dark:text-[white] text-center max-[615px]:text-4xl">Create and take school tests online in minutes.</h1>
                    <p className="text-[#0F2854] dark:text-[white] opacity-70 max-[520px]:text-sm max-[520px]:max-w-full text-center max-w-[90%]">No printing. Instant grading. Simple for teachers and students.</p>
                    <div className="flex gap-4 items-center flex-wrap justify-center">
                        <button className="bg-[#0046FF] hover:bg-[#0033CC] cursor-pointer transition-all duration-600 text-white font-medium py-2 px-4 rounded-lg">Start as Teacher</button>
                        <button className="flex items-center justify-center gap-2 rounded-lg border text-sm font-medium transition border-black/10 text-[#355181] hover:bg-[#f4f8ff] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 font-medium w-[157.4px] h-[40px] text-[16px]">Start as Student</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default mainPage