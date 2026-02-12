import Navbar from "./components/Navbar";
import LightPillar from "@/components/LightPillar";

export default function LandingPageLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
            <LightPillar
                className="pointer-events-none"
                topColor="#5227FF"
                bottomColor="#FF9FFC"
                intensity={1}
                rotationSpeed={0.4}
                glowAmount={0.0002}
                pillarWidth={7}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                pillarRotation={20}
                interactive={false}
                mixBlendMode="screen"
                quality="high"
            />
        </>
    );
}
