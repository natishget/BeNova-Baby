"use client"
import { Button } from "@/components/ui/button"
import { Linkedin, Facebook, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/utils/translations"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:bg-blue-600",
    bgColor: "bg-blue-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    color: "hover:bg-blue-700",
    bgColor: "bg-blue-600",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
      </svg>
    ),
    href: "#",
    color: "hover:bg-gray-900",
    bgColor: "bg-gray-800",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "#",
    color: "hover:bg-blue-500",
    bgColor: "bg-blue-400",
  },
]

export default function SocialLinks() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t("contact.social.title")}</h3>
      <p className="text-gray-600 mb-6">{t("contact.social.description")}</p>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="sm"
            className={`${social.bgColor} ${social.color} text-white border-0 hover:text-white transition-colors duration-300`}
            asChild
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.name}`}>
              <social.icon className="w-4 h-4 mr-2" />
              {social.name}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
