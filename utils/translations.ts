import enTranslations from "@/translations/en.json"
import amTranslations from "@/translations/am.json"

export type Language = "en" | "am"

export const translations = {
  en: enTranslations,
  am: amTranslations,
}

export function getTranslation(language: Language, key: string) {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    if (value === undefined) return key
    value = value[k]
  }

  return value || key
}
