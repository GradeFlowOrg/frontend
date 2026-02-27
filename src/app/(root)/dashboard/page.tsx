"use client"
import { logout } from '@/app/(authentication)/lib/actions'
import Button from '@/components/ui/Button'
import React from 'react'


const Dashboard = () => {
    return (
        <div className="container mx-auto h-[100vh] flex justify-center items-center max-[644px]:w-[80%] ">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold text-center max-[644px]:text-[20px]">Thank you for signing up, new features will be coming soon!</h1>
                <Button className='w-[100px]' onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}

export default Dashboard