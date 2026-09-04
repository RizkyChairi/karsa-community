import FloatingVideo from "@/components/landing/FloatingVideo"
import { Navbar } from "@/components/landing/Navbar"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ScrollReavel from "@/components/ui/ScrollReveal"

export default function KarsaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>

      <Navbar />
      <main className="pt-30 px-4 sm:px-10 ">
        {children}
      </main>
      <FloatingVideo />
    </>
  )
}