import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision",
  description:
    "Learn about BeNovaBaby's mission to support early childhood development in Ethiopia. Every child deserves a strong, supported start in life.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
