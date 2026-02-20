import React from 'react'

function mainPage() {
    return (
        <section className="w-full my-[20px] min-h-[60vh] flex flex-col items-center justify-center" id='feature'>
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-5xl text-[#0F2854] font-bold dark:text-[white] text-center max-[615px]:text-4xl">Create and take school tests online in minutes.</h1>
                    <p className="text-[#0F2854] dark:text-[white] opacity-70 max-[520px]:text-sm max-[520px]:max-w-full text-center max-w-[90%]">No printing. Instant grading. Simple for teachers and students.</p>
                    <div className="flex gap-4 items-center flex-wrap justify-center">
                        <button className="bg-[#0046FF] hover:bg-[#0033CC] cursor-pointer transition-all duration-600 text-white font-medium py-2 px-4 rounded-[10px]">Start as Teacher</button>
                        <button className="bg-white border border-[#0046FF] cursor-pointer hover:bg-[#80808021] dark:hover:bg-[#cbcbcb] transition-all duration-600 text-[#0046FF] font-medium py-2 px-4 rounded-[10px]">Start as Student</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default mainPage