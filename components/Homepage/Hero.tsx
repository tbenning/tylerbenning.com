import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className="relative px-0 pb-6 mb-0 overflow-hidden md:px-12 md:pb-12 lg:overflow-visible lg:pl-12 lg:pr-0 rounded-b-3xl grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:-mx-12">
      <div className="order-2 px-8 py-4 md:px-0 lg:py-32 lg:order-1">
        <span className="inline-block mt-4 mb-3 text-2xl lg:text-2xl text-tertiary">
          Hello, I'm Tyler —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-headers md:text-5xl text-primary">
          I'm a product designer with front-end{" "}
          <span className="effect-shine">superpowers</span>
        </h1>
      </div>

      <div className="relative order-1 -z-10 lg:order-2">
        <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-32">
          <motion.img
            src="img/bg-circle.svg"
            alt="cursor on a white box with abstract design"
            className="mx-auto w-96 md:w-auto"
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.75 }}
            animate={{ opacity: 1 }}
          />
        </div>
      </div>
      <motion.img
        src="img/artwork.svg"
        alt="cursor on a white box with abstract design"
        initial={{
          opacity: 0,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 15,
          transition: { type: "spring", bounce: 0.35, mass: 2 },
        }}
        transition={{ type: "spring" }}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 20 }}
        drag
        whileTap={{ rotate: 20, scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className="absolute bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover w-60 left-1/3 -top-60 md:w-80 lg:left-auto lg:right-32 lg:top-20 lg:w-auto"
      />
    </section>
  )
}
