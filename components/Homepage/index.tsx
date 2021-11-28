import Capsule from "../Capsule"

export default function Homepage() {
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold tracking-tight text-primary leading-headers">
        Hi, I’m Tyler —{" "}
        <span className="inline-block text-darkseafoam">
          I’m the founding designer at
          <a
            href="https://www.togetherplatform.com/"
            target="_blank"
            rel="noreferrer"
          >
            Together
          </a>
        </span>
      </h1>
      {/* <h1 className="antialiased font-serif mt-6 text-6xl text-gray-900">Hi, I’m Tyler — <span className="text-darkseafoam inline-block" >I’m the founding designer at Together</span></h1> */}
      <p className="mt-6 text-xl text-secondary">
        Having worked at a startup for the last few years, I developed a knack
        for these roles too
      </p>
      <div className="flex flex-wrap mt-4 space-x-2">
        <Capsule text="Product Management" />
        <Capsule text="Growth" />
        <Capsule text="Marketing" />
        <Capsule text="Front End Development" />
        <Capsule text="User Research" />
      </div>
    </>
  )
}
