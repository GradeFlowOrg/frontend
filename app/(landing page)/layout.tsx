import Navbar from "./components/Navbar";
import LightPillar from "@/components/LightPillar";

export default function LandingPageLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
            <LightPillar
                className="pointer-events-none"
                topColor="#9290C3"
                bottomColor="#1B1A55"
                intensity={5}
                rotationSpeed={0.4}
                glowAmount={0.0002}
                pillarWidth={7}
                pillarHeight={0.3}
                noiseIntensity={0}
                pillarRotation={20}
                interactive={false}
                mixBlendMode="screen"
                quality="high"
            />
        </>
    );
}
