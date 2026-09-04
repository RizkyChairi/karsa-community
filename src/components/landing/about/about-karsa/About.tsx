import ScrollReveal from "@/components/ui/ScrollReveal"

export default function AboutKarsa() {
  const textDecoration = [
    "Peduli Lingkungan",
    "Bersama Komunitas",
    "Berbagi dan Membantu",
    "Dampak Nyata",
  ]

  return (
    <div className="space-y-16">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center font-semibold text-3xl md:text-4xl">
        <ScrollReveal direction="left" duration={1}>
          <h2>
            Bersama Ciptakan{" "}
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-1/2 text-5xl leading-none text-karsa-purple">
                .
              </span>
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={1.5}>
          <h2>
            Perubahan yang Berarti{" "}
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-1/2 text-5xl leading-none text-karsa-blue">
                .
              </span>
            </span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Text Decoration */}
      <div className="grid grid-cols-2 gap-4 text-center text-base font-medium md:grid-cols-4 md:gap-8">
        {textDecoration.map((item) => (
          <p
            key={item}
            className="
              cursor-pointer
              underline
              decoration-dotted
              decoration-[#999898]
              underline-offset-4
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:text-karsa-black
            "
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}