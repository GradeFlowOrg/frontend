"use client"

import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import FirstPage from '@/app/(landing page)/page'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
    const [size, setSize] = useState(0);

    useEffect(() => {
        const update = () =>
            setSize(window.innerWidth);

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <>
            <Navbar />
            {size > 620 ?
                children :
                <FirstPage/>
            }
        </>
    );
}
