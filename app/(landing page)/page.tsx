import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="container flex justify-center gap-[40px] mx-auto">
        <div className="relative group p-8 w-80 h-48 rounded-[30px] 
              bg-white/10 backdrop-blur-2xl 
              border border-white/30 
              transition-all duration-500 hover:scale-105">
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-[30px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 text-white font-medium">
            <h2 className="text-xl">Liquid Glass</h2>
            <p className="text-white/70 text-sm mt-2">Smooth. Fluid. Native.</p>
          </div>
        </div>
        <div className="relative group p-8 w-80 h-48 rounded-[30px] 
              bg-white/10 backdrop-blur-2xl 
              border border-white/30 
              transition-all duration-500 hover:scale-105">
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-[30px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 text-white font-medium">
            <h2 className="text-xl">Liquid Glass</h2>
            <p className="text-white/70 text-sm mt-2">Smooth. Fluid. Native.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
