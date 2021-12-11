import {
  BeakerIcon,
  BriefcaseIcon,
  FilterIcon,
  CodeIcon,
  SearchCircleIcon,
} from "@heroicons/react/solid"

import Capsule from "../Capsule"
import SectionBlogList from "../SectionBlogList"
import SectionHeader from "../SectionHeader"
import SectionWorkList from "../SectionWorkList"
import { PentaIcon, CircleIcon, DiamondIcon } from "../StripeIcons"

type Props = {
  posts: [
    {
      id: string
      title: string
      slug: string
    }
  ]
}

export default function Homepage({ posts }: Props) {
  return (
    <>
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-0">
        <div className="order-2 py-4 md:py-36 2xl:py-44 md:order-1">
          <h1 className="mb-4 font-serif text-4xl antialiased  md:text-6xl text-primary">
            Hi, I’m Tyler —{" "}
            <span className="inline-block ">
              I’m the founding designer at{" "}
              <a
                href="https://www.togetherplatform.com"
                className="text-darkseafoam"
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

      <section className="max-w-3xl px-16 py-8 mx-auto mt-20 mb-20 text-center border rounded-md bg-gray-50">
        <p className="text-lg md:leading-relaxed md:text-xl text-secondary">
          I sometimes have a hard time staying in my lane, and like to jump
          across these roles too
        </p>
        <div className="flex flex-wrap justify-center mt-4 -m-1">
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
      </section>
      <section className="max-w-3xl mx-auto mb-10">
        <SectionHeader
          title="Work"
          subtitle="Where I've been for the last few years"
          icon={
            <div className="transition duration-200 ease-in-out hover:animate-bounce">
              <PentaIcon />
            </div>
          }
        />
        <SectionWorkList />
      </section>

      <section className="max-w-3xl mx-auto mb-10">
        <SectionHeader
          title="Writing"
          subtitle="A smattering of tips, tricks, and thoughts from along the way"
          icon={
            <div className="hover:animate-spin">
              <CircleIcon />
            </div>
          }
        />
        <SectionBlogList posts={posts} />
      </section>

      <section className="mx-auto">
        <SectionHeader
          title="Goodies"
          subtitle="Tidbits and snippets of projects over time"
          icon={
            <div className="hover:animate-pulse">
              <DiamondIcon />
            </div>
          }
        />
      </section>
    </>
  )
}
