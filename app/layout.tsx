import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BeNovaBaby - Building Bright Beginnings for Every Child",
    template: "%s | BeNovaBaby",
  },
  description:
    "Empowering parents and enriching children aged 0-5 through milestone tracking, expert resources, educational toys, and a supportive parent community in Addis Ababa, Ethiopia.",
  keywords: [
    "early childhood development",
    "parenting",
    "child development",
    "educational toys",
    "milestone tracking",
    "Ethiopia",
    "Addis Ababa",
  ],
  authors: [{ name: "BeNovaBaby" }],
  creator: "BeNovaBaby",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benovababy.com",
    siteName: "BeNovaBaby",
    title: "BeNovaBaby - Building Bright Beginnings for Every Child",
    description:
      "Empowering parents and enriching children aged 0-5 through comprehensive early childhood development resources.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=BeNovaBaby",
        width: 1200,
        height: 630,
        alt: "BeNovaBaby - Early Childhood Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeNovaBaby - Building Bright Beginnings for Every Child",
    description:
      "Empowering parents and enriching children aged 0-5 through comprehensive early childhood development resources.",
    images: ["/placeholder.svg?height=630&width=1200&text=BeNovaBaby"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
