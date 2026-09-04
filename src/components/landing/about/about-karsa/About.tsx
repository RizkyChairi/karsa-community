import ScrollReavel from "@/components/ui/ScrollReveal"

export default function AboutKarsa() {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center font-semibold text-3xl md:text-4xl">
        <ScrollReavel direction="left" duration={1}>
          <h2>
            Bersama Ciptakan <span className="relative"><span className="absolute text-5xl bottom-1 text-karsa-purple">.</span></span>
          </h2>
        </ScrollReavel>
        <ScrollReavel direction="right" duration={1.5}>
          <h2>
            Perubahan yang Berarti
            <span className="relative"><span className="absolute bottom-0.5 text-5xl text-karsa-blue">  .</span></span>
          </h2>
        </ScrollReavel>
      </div>
    </div>
  )
}