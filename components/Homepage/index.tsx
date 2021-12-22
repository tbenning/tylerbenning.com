import {
  BeakerIcon,
  BriefcaseIcon,
  FilterIcon,
  CodeIcon,
  SearchCircleIcon,
} from "@heroicons/react/solid"

import Capsule from "../Capsule"
import PersonalProjectList from "../PersonalProjectList"
import SectionBlogList from "../SectionBlogList"
import SectionHeader from "../SectionHeader"
import SectionProjectList from "../SectionProjectList"
import SectionWorkList from "../SectionWorkList"
import {
  PentaIcon,
  CircleIcon,
  DiamondIcon,
  SquirqleIcon,
} from "../StripeIcons"
import Hero from "./Hero"

type Props = {
  posts: [
    {
      id: string
      title: string
      subtitle: string
      slug: string
    }
  ]
  projects: [
    {
      id: string
      title: string
      subtitle: string
      slug: string
      projectType: string
      isPublished: boolean
      bgColor: string
      hasDarkBg: boolean
      featuredImage: {
        alt: string
        image: {
          url: string
        }
      }
    }
  ]
}

export default function Homepage({ posts, projects }: Props) {
  const workProjects = projects.filter(
    (project) => project.projectType === "work"
  )
  const personalProjects = projects.filter(
    (project) => project.projectType === "personal"
  )

  return (
    <>
      <Hero />
      <section className="max-w-3xl px-6 py-6 mx-auto mt-0 mb-10 text-center border md:mb-20 md:mt-20 md:py-8 md:px-16 rounded-md bg-gray-50">
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

      <section className="max-w-3xl mx-auto mb-10 md:mb-20">
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

      <section className="max-w-3xl mx-auto mb-10 md:mb-20">
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

      <section className="mx-auto mb-10 md:mb-20">
        <SectionHeader
          title="Fun Projects"
          subtitle="Things I built for fun and favours"
          icon={
            <div className="hover:animate-pulse">
              <SquirqleIcon />
            </div>
          }
        />
        <PersonalProjectList projects={personalProjects} />
      </section>

      <section className="mx-auto mb-10 md:mb-20">
        <SectionHeader
          title="Work Projects"
          subtitle="Tidbits and snippets of projects over time"
          icon={
            <div className="hover:animate-pulse">
              <DiamondIcon />
            </div>
          }
        />
        <SectionProjectList projects={workProjects} />
      </section>
    </>
  )
}
