import FloatingVideo from "@/components/landing/FloatingVideo"
import { Navbar } from "@/components/landing/Navbar"

export default function KarsaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>

      <Navbar />
      <main className="pt-30 px-4 md:px-10 lg:px-25">
        {children}
      </main>
      {/* <FloatingVideo /> */}
    </>
  )
}