import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Home - Building Bright Beginnings for Every Child",
  description:
    "BeNovaBaby empowers parents and enriches children aged 0-5 through educational toys, milestone tracking, expert sessions, and a supportive parent community.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CallToAction />
    </>
  )
}
