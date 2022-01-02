export default function Hero() {
  return (
    <section className="pl-8 mb-0 md:pl-16 rounded-b-3xl grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-0 bg-sand100">
      <div className="order-2 py-4 md:py-32 2xl:py-44 md:order-1">
        <span className="inline-block mb-3 text-2xl md:text-3xl text-tertiary">
          Hello, I'm Tyler —
        </span>
        <h1 className="mb-4 text-4xl antialiased font-bold tracking-tight md:leading-headers md:text-6xl text-primary">
          I'm a designer with developer super powers
        </h1>
      </div>

      <div className="z-0 order-1 overflow-hidden md:order-2">
        <div className="inset-y-0 -mt-36 md:-mt-40 md:-mr-32">
          <img
            src="img/hero1.svg"
            alt="cursor on a white box with abstract design"
            className="mx-auto max-h-96"
          />
        </div>
      </div>
      {/* <div className="relative z-0 order-1 overflow-hidden md:order-2">
        <div className="absolute -top-40 -right-10">
          <img
            src="img/hero1.svg"
            alt="cursor on a white box with abstract design"
            className="mx-auto"
          />
        </div>
      </div> */}
    </section>
  )
}
