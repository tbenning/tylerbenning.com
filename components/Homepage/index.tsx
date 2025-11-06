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
import SectionBlogList from "../SectionBlogsList"
import SectionHeader from "../SectionHeaderUpdate"
import SectionProjectList from "../SectionProjectList"
import { DiamondIcon, CircleIcon } from "../StripeIcons"
import Hero from "./Hero"

type Props = {
  posts: {
    id: string
    title: string
    subtitle: string
    slug: string
    publishDate: Date
  }[]
  projects: {
    id: string
    title: string
    subtitle: string
    slug: string
    projectType: string
    isPublished: boolean
    bgColor: string
    hasDarkBg: boolean
    timeline: string
    company: string
    featuredImage?: {
      alt: string
      image: {
        url: string
      }
    }
  }[]
}

function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default function Homepage({ posts, projects }: Props) {
  const workProjects = projects.filter(
    (project) => project.projectType === "work",
  )
  const personalProjects = projects.filter(
    (project) => project.projectType === "personal",
  )

  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <section className="max-w-3xl px-5 py-6 mx-auto mt-6 mb-10 text-center bg-white bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg md:mb-20 md:mt-32 md:py-12 md:px-14">
          <h2 className="text-xl font-semibold md:text-2xl text-primary">
            (But sometimes I jump into these roles too)
          </h2>
          <div className="flex flex-wrap justify-center mt-6 -m-1">
            <Capsule
              text="Front End Development"
              className="m-1 hover:rotate-1"
              icon={<CodeIcon className="w-5 h-6 text-darkseafoam" />}
            />
            <Capsule
              text="User Research"
              className="m-1 hover:-rotate-1"
              icon={<SearchCircleIcon className="w-5 h-6 text-red-600" />}
            />
            <Capsule
              text="Growth"
              className="m-1 hover:rotate-1"
              icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
            />
            <Capsule
              text="Product Management"
              className="m-1 hover:-rotate-1"
              icon={<BriefcaseIcon className="w-5 h-6 text-yellow-700" />}
            />
            <Capsule
              text="Brand &amp; Marketing"
              className="m-1 hover:-rotate-1"
              icon={<FilterIcon className="w-5 h-6 text-indigo-500" />}
            />
          </div>
        </section>
        <a id="writing" />
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-15">
          <SectionHeader
            title="Writing"
            subtitle="A smattering of tips, tricks, and thoughts from along the way"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-180">
                <CircleIcon />
              </div>
            }
          />
          <div className="pt-8" />
          <SectionBlogList posts={posts} />
          <a id="work" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Work Projects"
            subtitle="Tidbits and snippets of projects over time"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-90">
                <DiamondIcon />
              </div>
            }
          />
          <div className="pt-12" />
          <SectionProjectList projects={workProjects} />
        </section>
      </FadeIn>

      {/* <FadeIn>
        <section className="mx-auto mb-10 md:mb-20">
          <SectionHeader
            title="Fun Projects"
            subtitle="Things I built for fun and favours"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-150 hover:-rotate-12">
                <SquirqleIcon />
              </div>
            }
          />
          <div className="pt-12" />
          <PersonalProjectList projects={personalProjects} />
        </section>
      </FadeIn> */}
    </>
  )
}
