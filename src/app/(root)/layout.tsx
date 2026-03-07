import SideBar from "@/components/ui/SideBar";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden md:min-h-screen md:h-screen md:flex-row dark:bg-[#1e1e1e]">
      <SideBar />
      <Navbar />
      <main className="layout-enter relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-3 pt-3 md:h-screen md:p-4">
        <div className="mt-3 min-h-0 min-w-0 flex-1 overflow-y-auto pb-24 md:mt-0 md:pb-0 [scrollbar-width:thin] [scrollbar-color:rgba(100,116,139,0.45)_transparent] dark:[scrollbar-color:rgba(148,163,184,0.35)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400/45 [&::-webkit-scrollbar-thumb]:transition-colors [&::-webkit-scrollbar-thumb:hover]:bg-slate-500/60 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500/40 dark:[&::-webkit-scrollbar-thumb:hover]:bg-slate-400/55">
          <div className="min-w-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
