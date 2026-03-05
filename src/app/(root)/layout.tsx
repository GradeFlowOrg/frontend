import SideBar from "@/components/ui/SideBar";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex dark:bg-[#1e1e1e]">
      <SideBar />
      <main className="layout-enter relative flex-1 px-3 py-3 pb-24 md:px-4 md:py-4 md:pb-4">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
