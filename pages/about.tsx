import { motion } from "framer-motion"
import Image from "next/image"

import { ExternalLink } from "../components/Footer"
import Layout from "../components/Layout"
import SectionWorkList from "../components/SectionWorkList"
import SEO from "../components/SEO"
import { TriSquareIcon } from "../components/StripeIcons"

export default function About() {
  return (
    <Layout>
      <SEO
        og="og-about.png"
        title="About"
        description="About the life and times of Tyler"
      />
      <div className="relative">
        <img
          src="img/bg-circle.svg"
          alt="circle with woodgrain"
          className="absolute right-0 -bottom-32 -z-10"
        />
        <div className="absolute top-0 right-44">
          <motion.div
            className="hidden overflow-hidden md:block md:w-40 md:h-40 rounded-md"
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, mass: 2 }}
          >
            <Image
              src="/img/about-tyler.jpg"
              alt="photo of tyler"
              height="160"
              width="160"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary">
          About
        </h1>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Hello, I'm Tyler and I've been working as a product designer for a
          number of years now. While my primary craft is design, I've spent the
          last few years working at a startup where I learned to closely
          collaborate in code with engineers — and I love it.
        </p>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          I currently live in British Columbia, where you'll find me on the
          mountain hiking or snowboarding. 🏔 🍁 🏂
        </p>

        <ul className="flex items-baseline space-x-4">
          <li className="text-sm text-secondary">Find me on</li>
          <li>
            <ExternalLink
              href="https://www.linkedin.com/in/tylerbenning/"
              title="LinkedIn"
            />
          </li>
          <li>
            <ExternalLink href="https://github.com/tbenning" title="GitHub" />
          </li>
          <li>
            <ExternalLink
              href="https://twitter.com/tylerbenning_"
              title="Twitter"
            />
          </li>
        </ul>
        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 text-lg font-semibold">Where I've Worked</h2>
        <SectionWorkList />
        <h2 className="mb-4 text-lg font-semibold">Early Career Stuff</h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed -tracking-[.005em] text-secondary">
          In 2015, I started my design career at an IBM design studio in
          downtown Toronto, with 20 or so other designers. I designed enterprise
          risk management tools for the OpenPages team. In some of my evenings
          and weekends, I started freelancing with a startup called{" "}
          <a
            href="https://www.paddlehr.com/"
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            target="_blank"
            rel="noreferrer"
          >
            PaddleHR
          </a>{" "}
          to help them get their first product off the ground and raise a{" "}
          <a
            href="https://www.crunchbase.com/organization/paddle-3"
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            target="_blank"
            rel="noreferrer"
          >
            seed round.
          </a>
        </p>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed -tracking-[.005em] text-secondary">
          In 2017, I took my second job at{" "}
          <a
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            href="https://tophat.com/"
            target="_blank"
            rel="noreferrer"
          >
            Top Hat
          </a>{" "}
          right after they’d raised a{" "}
          <a
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            href="https://www.crunchbase.com/organization/tophat"
            target="_blank"
            rel="noreferrer"
          >
            Series C
          </a>{" "}
          . I joined a team of 4 other designers. I led design for the student
          mobile app (iOS and Android), launched a new product called Top Hat
          Test (web), and led design for the Classroom Response team (web).
        </p>
        <h2 className="pt-4 mb-4 text-lg font-semibold">Joining Together</h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed -tracking-[.005em] text-secondary">
          In spring of 2019, I left Top Hat to join{" "}
          <a
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            href="https://www.togetherplatform.com/"
            target="_blank"
            rel="noreferrer"
          >
            Together
          </a>
          . At this point, Together was just the two co-founders, had a handful
          of customers, ~$20k in ARR, and had just been accepted into Y
          Combinator. I joined with another engineer I knew from Top Hat, and
          the four of us moved to Palo Alto into a hackerhouse for the summer to
          build product, talk to users, get customers, and prepare for demo day.
        </p>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed -tracking-[.005em] text-secondary">
          Since then, Together has grown &gt;50x since I joined, acquired big
          name customers including Disney, 7-11, AirBnb, Heineken, and a bunch
          more. We’ve gone from an initial team of 4 to a team of &gt;15. We’ve
          raised a couple of{" "}
          <a
            className="border-b border-darkseafoam  text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100"
            href="https://betakit.com/together-lands-6-2-million-cad-to-pair-mentors-and-mentees-in-companies/"
            target="_blank"
            rel="noreferrer"
          >
            rounds of funding
          </a>{" "}
          and I’ve learned a tremendous amount about company building.
        </p>
        <h2 className="pt-4 mb-4 text-lg font-semibold">One Liners</h2>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          Good design gets out of the user’s way.
        </p>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          Building good product is a team sport.
        </p>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          Talk to users and ship product.
        </p>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          Ship to learn.
        </p>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          Impatience with actions, patience with results.
        </p>
        <h2 className="pt-4 mb-4 text-lg font-semibold">Making This Site</h2>
        <p className="mb-4 font-serif text-xl antialiased -tracking-[.005em] text-secondary">
          I built this website using Keystone and Next.js. I used Tailwind to
          create my styles and Framer Motion for a bit of extra bounce. It was
          fun to spend time trying out neat new web tools.
        </p>
      </div>
    </Layout>
  )
}
