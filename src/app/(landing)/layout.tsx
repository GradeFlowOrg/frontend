import Navbar from "./_components/Navbar";

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
