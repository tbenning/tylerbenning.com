import "../styles/tailwind-custom.css"
import "../styles/fonts.css"
import { useEffect } from "react"

import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import * as ga from "../lib/ga"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
