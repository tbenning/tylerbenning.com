import Layout from "../components/Layout"
import { TriSquareIcon } from "../components/StripeIcons"

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12">
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 font-serif text-4xl antialiased">About</h1>
        <h2 className="mb-4 text-lg font-bold">Early Career Stuff</h2>
        <p className="mb-4 text-lg leading-relaxed text-secondary">
          In 2015, I started my design career at an IBM design studio in
          downtown Toronto, with 20 or so other designers. I designed enterprise
          risk management tools for the OpenPages team. In some of my evenings
          and weekends, I started freelancing with a startup called{" "}
          <a
            href="https://www.paddlehr.com/"
            className="underline text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100 hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            PaddleHR
          </a>{" "}
          to help them get their first product off the ground.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-secondary">
          In 2017, I took my second job at{" "}
          <a
            className="underline text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100 hover:no-underline"
            href="https://tophat.com/"
            target="_blank"
            rel="noreferrer"
          >
            Top Hat
          </a>{" "}
          right after they’d raised a Series C. I joined a team of 4 other
          designers. I led design for the student mobile app (iOS and Android),
          launched a new product called Top Hat Test (web), and led design for
          the Classroom Response team (web).
        </p>
        <h2 className="pt-4 mb-4 text-lg font-bold">Joining Together</h2>
        <p className="mb-4 text-lg leading-relaxed text-secondary">
          In spring of 2019, I left Top Hat to join{" "}
          <a
            className="underline text-darkseafoam transform ease-in-out duration-200 hover:bg-gray-100 hover:no-underline"
            href="https://www.togetherplatform.com/"
            target="_blank"
            rel="noreferrer"
          >
            Together
          </a>
          . At this point, Together had a team comprised of co-founders, had a
          handful of customers, ~$20k in ARR, and had just been accepted into Y
          Combinator. I joined with another engineer from Top Hat, and the four
          of us moved to Palo Alto into a hackerhouse for the summer to build
          product, talk to users, get customers, and prepare for demo day.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-secondary">
          Since then, Together has grown &gt;50x since I joined, acquired big
          name customers including Disney, 7-11, AirBnb, Heineken, and a bunch
          more. We’ve gone from an initial team of 4 to a team of &gt;15. We’ve
          raised a couple of rounds of funding, and I’ve learned a tremendous
          amount about company building.
        </p>
        <h2 className="pt-4 mb-4 text-lg font-bold">One Liners</h2>
        <p className="mb-4 text-lg text-secondary">
          Good design gets out of the user’s way.
        </p>
        <p className="mb-4 text-lg text-secondary">
          Building good product is a team sport.
        </p>
        <p className="mb-4 text-lg text-secondary">
          Talk to users and ship product.
        </p>
        <p className="mb-4 text-lg text-secondary">Ship to learn.</p>
        <p className="mb-4 text-lg text-secondary">
          Impatience with actions, patience with results.
        </p>
        <h2 className="pt-4 mb-4 text-lg font-bold">Making This Site</h2>
        <p className="mb-4 text-lg text-secondary">
          I built this website using Keystone and Next.js. I used Tailwind to
          create my styles. It’s probably a bit over engineered, but it was fun
          to learn.
        </p>
      </div>
    </Layout>
  )
}
