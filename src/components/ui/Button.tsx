import React from 'react'

const Button = ({children, className, type}: {children: React.ReactNode; className?: string; type?: "submit" | "reset" | "button";}) => {
  return (
    <button type={type} className={`mt-2 rounded-lg bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0036c4] cursor-pointer ${className || ""}`}>{children}</button>
  )
}

export default Button