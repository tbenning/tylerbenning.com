import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({ children }: Props) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <div className="container mx-auto max-w-screen-lg">
        <div className="px-4 lg:px-0">{children}</div>
      </div>
    </motion.main>
  )
}
