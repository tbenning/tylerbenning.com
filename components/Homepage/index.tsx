import React from "react"

import {
  BeakerIcon,
  BriefcaseIcon,
  FilterIcon,
  CodeIcon,
  SearchCircleIcon,
} from "@heroicons/react/solid"
import { motion } from "framer-motion"

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

function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { ease: "linear", duration: 1 },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  )
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
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <section className="max-w-3xl px-6 py-6 mx-auto mt-6 mb-10 text-center bg-white bg-gray-100  rounded-lg md:mb-20 md:mt-32 md:py-14 md:px-14">
          <p className="text-2xl font-bold md:text-3xl text-primary">
            Sometimes I like to jump into these roles too
          </p>
          <div className="flex flex-wrap justify-center mt-6 -m-1">
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
            <Capsule
              text="Growth"
              className="m-1 hover:rotate-1"
              icon={<BeakerIcon className="w-4 h-5 text-lime-600" />}
            />
            <Capsule
              text="Product Management"
              className="m-1 hover:-rotate-1"
              icon={<BriefcaseIcon className="w-4 h-5 text-yellow-700" />}
            />
            <Capsule
              text="Marketing"
              className="m-1 hover:-rotate-1"
              icon={<FilterIcon className="w-4 h-5 text-indigo-500" />}
            />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="max-w-3xl mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Where I've Worked"
            subtitle="Where I've been for the last few years"
            icon={
              <div className="transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-150 hover:-rotate-12">
                <PentaIcon />
              </div>
            }
          />
          <SectionWorkList />
          <a id="writing" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="max-w-3xl mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Writing"
            subtitle="A smattering of tips, tricks, and thoughts from along the way"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:-translate-y-2 hover:rotate-180">
                <CircleIcon />
              </div>
            }
          />
          <SectionBlogList posts={posts} />
          <a id="work" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Fun Projects"
            subtitle="Things I built for fun and favours"
            icon={
              <div className="transition duration-1000 ease-linear hover:scale-150">
                <SquirqleIcon />
              </div>
            }
          />
          <PersonalProjectList projects={personalProjects} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Work Projects"
            subtitle="Tidbits and snippets of projects over time"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:-translate-y-4 hover:rotate-90">
                <DiamondIcon />
              </div>
            }
          />
          <SectionProjectList projects={workProjects} />
        </section>
      </FadeIn>
    </>
  )
}
