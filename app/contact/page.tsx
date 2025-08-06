import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact BeNovaBaby in Addis Ababa, Ethiopia. Reach out for support, questions, or to join our early childhood development community.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
