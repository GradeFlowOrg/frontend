import Navbar from "./components/Navbar";
import LightPillar from "@/components/LightPillar";

export default function LandingPageLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
            <LightPillar
                className="pointer-events-none"
                topColor="rgba(30, 58, 138, 0.35)"
                bottomColor="rgba(37, 99, 235, 0.15)"
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
