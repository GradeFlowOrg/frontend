"use client"
import { logout } from '@/app/(authentication)/lib/actions'
import Button from '@/components/ui/Button'
import React from 'react'


const Dashboard = () => {
    return (
        <div>
            <h1>hello world</h1>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}

export default Dashboard