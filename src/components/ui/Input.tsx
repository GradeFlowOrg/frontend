import React from 'react'

const Input = ({ type, placeholder, className }: { type: string; placeholder: string; className?: string; }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={` rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0046FF] focus:ring-2 focus:ring-[#0046FF]/20 dark:border-white/10 dark:bg-[#0b1220] dark:text-white ${className || ""}`}
        />
    )
}

export default Input