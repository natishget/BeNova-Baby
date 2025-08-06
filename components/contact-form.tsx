"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/utils/translations"

export default function ContactForm() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.form.name")}
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          placeholder={t("contact.form.namePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.form.email")}
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          placeholder={t("contact.form.emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.form.message")}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {t("contact.form.submit")}
        <Send className="ml-2 w-4 h-4" />
      </Button>
    </form>
  )
}
