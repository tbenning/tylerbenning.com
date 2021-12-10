import {
  BeakerIcon,
  BriefcaseIcon,
  FilterIcon,
  CodeIcon,
  SearchCircleIcon,
} from "@heroicons/react/solid"

import Capsule from "../Capsule"

export default function Homepage() {
  return (
    <>
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-0">
        <div className="order-2 py-4 md:py-36 2xl:py-44 md:order-1">
          {/* <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight md:text-5xl text-primary leading-headers">
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
          </h1> */}
          <h1 className="mb-4 font-serif text-4xl antialiased  md:text-5xl text-primary">
            Hi, I’m Tyler —{" "}
            <span className="inline-block text-darkseafoam">
              I’m the founding designer at Together
            </span>
          </h1>
          <p className="text-lg md:leading-relaxed md:mt-6 md:text-lg text-secondary">
            Having worked at a startup for the last few years, I often work in
            these roles too
          </p>
          <div className="flex flex-wrap mt-4 -m-1">
            <Capsule
              text="Product Management"
              className="m-1 hover:-rotate-1"
              icon={<BriefcaseIcon className="w-4 h-5 text-yellow-700" />}
            />
            <Capsule
              text="Growth"
              className="m-1 hover:rotate-1"
              icon={<BeakerIcon className="w-4 h-5 text-lime-600" />}
            />
            <Capsule
              text="Marketing"
              className="m-1 hover:-rotate-1"
              icon={<FilterIcon className="w-4 h-5 text-indigo-500" />}
            />
            <Capsule
              text="Front End Development"
              className="m-1 hover:rotate-1"
              icon={<CodeIcon className="w-4 h-5 text-darkseafoam" />}
            />
            <Capsule
              text="User Research"
              className="m-1 hover:-rotate-1"
              icon={<SearchCircleIcon className="w-4 h-5 text-red-600" />}
            />
          </div>
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
    </>
  )
}
