"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { translations } from "@/utils/translations"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span>{translations[language].language[language === "en" ? "am" : "en"]}</span>
    </Button>
  )
}
