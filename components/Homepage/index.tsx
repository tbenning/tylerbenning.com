import Capsule from "../Capsule"

export default function Homepage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="order-2 py-4 md:py-20 md:order-1">
          <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl text-primary leading-headers">
            Hi, I’m Tyler —{" "}
            <span className="inline-block text-darkseafoam">
              I’m the founding designer at{" "}
              <a
                href="https://www.togetherplatform.com/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-darkerseafoam"
              >
                Together
              </a>
            </span>
          </h1>
          {/* <h1 className="antialiased font-serif mt-6 text-6xl text-gray-900">Hi, I’m Tyler — <span className="text-darkseafoam inline-block" >I’m the founding designer at Together</span></h1> */}
          <p className="mt-3 text-lg md:mt-6 md:text-xl text-secondary">
            Having worked at a startup for the last few years, I often work in
            these roles too
          </p>
          <div className="flex flex-wrap mt-4 -m-1">
            <Capsule text="Growth" className="m-1" />
            <Capsule text="Product Management" className="m-1" />
            <Capsule text="Marketing" className="m-1" />
            <Capsule text="Front End Development" className="m-1" />
            <Capsule text="User Research" className="m-1" />
          </div>
        </div>

        <div className="z-0 order-1 md:order-2">
          <div className="inset-y-0 -mt-16 md:-mt-52">
            <img
              src="img/hero1.svg"
              alt="cursor on a white box with abstract design"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}
