export default function Hero() {
  return (
    <section className="mb-0 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-0">
      <div className="order-2 py-4 md:py-36 2xl:py-44 md:order-1">
        <h1 className="mb-4 font-serif text-4xl antialiased  md:text-6xl text-primary">
          Hi, I’m Tyler —{" "}
          <span className="inline-block ">
            I’m the founding designer at{" "}
            <a
              href="https://www.togetherplatform.com"
              className="text-darkseafoam hover:underline hover:decoration-dotted"
              target="_blank"
              rel="noreferrer"
            >
              Together
            </a>
          </span>
        </h1>
      </div>

      <div className="z-0 order-1 md:order-2">
        <div className="inset-y-0 -mt-36 md:-mt-52">
          <img
            src="img/hero1.svg"
            alt="cursor on a white box with abstract design"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
