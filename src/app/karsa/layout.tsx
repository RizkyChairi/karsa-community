import { Navbar } from "@/components/Navbar"

export default function KarsaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>

      <Navbar />
      <main className="pt-27 px-4 sm:px-10 ">
        {children}
      </main>
    </>
  )
}