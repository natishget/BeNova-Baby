"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactInfo() {
  const { t } = useLanguage()

  const contactDetails = [
    {
      icon: MapPin,
      title: t("contact.info.location"),
      details: [t("contact.info.locationDetails1"), t("contact.info.locationDetails2")],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      details: [t("contact.info.phoneDetails1"), t("contact.info.phoneDetails2")],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      details: [t("contact.info.emailDetails1"), t("contact.info.emailDetails2")],
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      details: [t("contact.info.hoursDetails1"), t("contact.info.hoursDetails2")],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.info.title")}</h2>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
