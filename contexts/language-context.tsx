"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "am"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Set client flag after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load language from localStorage on mount
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
        setLanguage(savedLanguage)
      }
    }
  }, [isClient])

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language)
      document.documentElement.lang = language
    }
  }, [language, isClient])

  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.contact": "Contact",
      "nav.joinCommunity": "Join Community",

      // Hero Section
      "hero.badge": "Ages 0-5 Development",
      "hero.title": "Building Bright Beginnings for Every Child",
      "hero.subtitle":
        "Empowering parents. Enriching children. Join our community in Addis Ababa as we support the growth and development of children aged 0–5.",
      "hero.exploreMore": "Explore More",
      "hero.joinCommunity": "Join Our Community",

      // Services
      "services.title": "Everything Your Child Needs to Thrive",
      "services.subtitle":
        "Our comprehensive platform brings together the essential elements for early childhood development in one place.",
      "services.educationalToys.title": "Educational Toys",
      "services.educationalToys.description":
        "Carefully curated play materials that stimulate learning and creativity while ensuring safety for young children.",
      "services.milestoneTracking.title": "Milestone Tracking",
      "services.milestoneTracking.description":
        "Monitor your child's development journey with our comprehensive tracking system designed for ages 0-5.",
      "services.expertSessions.title": "Expert Sessions",
      "services.expertSessions.description":
        "Access to child development experts and educational resources tailored for Ethiopian families.",
      "services.parentSupport.title": "Parent Support Community",
      "services.parentSupport.description":
        "Connect with other parents and caregivers in a supportive, understanding community environment.",
      "services.stats.families": "Families Supported",
      "services.stats.milestones": "Milestones Tracked",
      "services.stats.resources": "Expert Resources",

      // Call to Action
      "cta.badge": "Join Our Mission",
      "cta.title": "Ready to Give Your Child the Best Start?",
      "cta.subtitle":
        "Join hundreds of families in Addis Ababa who trust BeNovaBaby to support their child's development journey. Together, we can shape a brighter start for every child.",
      "cta.getStarted": "Get Started Today",
      "cta.learnMore": "Learn More",

      // About Page
      "about.title": "About BeNovaBaby",
      "about.subtitle": "Building a brighter future for children across Ethiopia, one family at a time.",
      "about.mission.p1":
        "At BeNovaBaby, we believe that the earliest years of a child's life are the most powerful in shaping who they become. We are a purpose-driven company based in Addis Ababa, Ethiopia, committed to helping parents and caregivers support the growth and development of children aged 0–5.",
      "about.mission.principle":
        "Our work is grounded in one guiding principle: Every child deserves a strong, supported start in life.",
      "about.mission.p2": "That's why we've created a holistic platform that brings together:",
      "about.mission.milestone": "Milestone tracking",
      "about.mission.expert": "Expert-led resources",
      "about.mission.materials": "Curated play materials",
      "about.mission.community": "A vibrant parent community",
      "about.mission.conclusion": "Together, we can shape a brighter start for every child.",
      "about.playBased.title": "Play-Based Learning",
      "about.playBased.description": "Engaging activities that make learning fun and natural",
      "about.parentSupport.title": "Parent Support",
      "about.parentSupport.description": "Guidance and community for confident parenting",
      "about.developmentTracking.title": "Development Tracking",
      "about.developmentTracking.description": "Monitor and celebrate every milestone achieved",

      // Contact Page
      "contact.title": "Get in Touch",
      "contact.subtitle":
        "We'd love to hear from you! Reach out with questions, feedback, or to learn more about joining our community.",
      "contact.form.title": "Send us a message",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.message": "Message",
      "contact.form.namePlaceholder": "Enter your full name",
      "contact.form.emailPlaceholder": "Enter your email address",
      "contact.form.messagePlaceholder": "Tell us how we can help you...",
      "contact.form.send": "Send Message",
      "contact.info.title": "Contact Information",
      "contact.info.location": "Location",
      "contact.info.locationDetails1": "Addis Ababa, Ethiopia",
      "contact.info.locationDetails2": "Serving families nationwide",
      "contact.info.phone": "Phone",
      "contact.info.phoneDetails1": "+251 11 XXX XXXX",
      "contact.info.phoneDetails2": "Mon-Fri 9AM-6PM EAT",
      "contact.info.email": "Email",
      "contact.info.emailDetails1": "hello@benovababy.com",
      "contact.info.emailDetails2": "support@benovababy.com",
      "contact.info.hours": "Business Hours",
      "contact.info.hoursDetails1": "Monday - Friday: 9AM - 6PM",
      "contact.info.hoursDetails2": "Saturday: 10AM - 4PM",
      "contact.social.title": "Follow Us",
      "contact.social.subtitle":
        "Stay connected and get the latest updates on child development tips and community events.",
      "contact.map": "Find us in Addis Ababa",

      // Footer
      "footer.description":
        "Building bright beginnings for every child in Ethiopia. Empowering parents and enriching children aged 0-5 through comprehensive early childhood development resources.",
      "footer.madeWith": "Made with love in Addis Ababa",
      "footer.quickLinks": "Quick Links",
      "footer.contactInfo": "Contact Info",
      "footer.copyright": "BeNovaBaby. All rights reserved.",
      "footer.tagline": "Every child deserves a strong, supported start in life.",
      "footer.privacyPolicy": "Privacy Policy",

      // Navigation items
      "navigation.home": "Home",
      "navigation.about": "About Us",
      "navigation.contact": "Contact",
      "navigation.joinCommunity": "Join Community",
    },
    am: {
      // Navigation
      "nav.home": "መነሻ",
      "nav.about": "ስለ እኛ",
      "nav.contact": "ያግኙን",
      "nav.joinCommunity": "ማህበረሰብ ይቀላቀሉ",

      // Hero Section
      "hero.badge": "ከ0-5 ዓመት ልማት",
      "hero.title": "ለእያንዳንዱ ልጅ ብሩህ ጅምር መገንባት",
      "hero.subtitle":
        "ወላጆችን ማብቃት። ልጆችን ማበልጸግ። በአዲስ አበባ ውስጥ ካሉት ማህበረሰብ ጋር ይቀላቀሉ ከ0-5 ዓመት የሆኑ ልጆችን እድገት እና ልማት እንደምንደግፍ።",
      "hero.exploreMore": "ተጨማሪ ያስሱ",
      "hero.joinCommunity": "ማህበረሰባችንን ይቀላቀሉ",

      // Services
      "services.title": "ልጅዎ ለማደግ የሚያስፈልገው ሁሉ",
      "services.subtitle": "የእኛ አጠቃላይ መድረክ የቅድመ ህፃናት ልማት አስፈላጊ ንጥረ ነገሮችን በአንድ ቦታ ያሰባስባል።",
      "services.educationalToys.title": "የትምህርት መጫወቻዎች",
      "services.educationalToys.description": "ለትናንሽ ልጆች ደህንነትን በማረጋገጥ ትምህርትን እና ፈጠራን የሚያነቃቁ በጥንቃቄ የተመረጡ የመጫወቻ ቁሳቁሶች።",
      "services.milestoneTracking.title": "የእድገት ደረጃ ክትትል",
      "services.milestoneTracking.description": "ለ0-5 ዓመት የተነደፈ አጠቃላይ የክትትል ስርዓታችንን በመጠቀም የልጅዎን የእድገት ጉዞ ይከታተሉ።",
      "services.expertSessions.title": "የባለሙያ ክፍለ ጊዜዎች",
      "services.expertSessions.description": "ለኢትዮጵያ ቤተሰቦች የተዘጋጁ የልጅ ልማት ባለሙያዎች እና የትምህርት ሀብቶች መዳረሻ።",
      "services.parentSupport.title": "የወላጆች ድጋፍ ማህበረሰብ",
      "services.parentSupport.description": "በአጋዥ እና ተረዳዳቢ የማህበረሰብ አካባቢ ውስጥ ከሌሎች ወላጆች እና አሳዳጊዎች ጋር ይገናኙ።",
      "services.stats.families": "የተደገፉ ቤተሰቦች",
      "services.stats.milestones": "የተከታተሉ እድገት ደረጃዎች",
      "services.stats.resources": "የባለሙያ ሀብቶች",

      // Call to Action
      "cta.badge": "ተልእኳችንን ይቀላቀሉ",
      "cta.title": "ለልጅዎ ምርጡን ጅምር ለመስጠት ዝግጁ ነዎት?",
      "cta.subtitle":
        "በአዲስ አበባ ውስጥ BeNovaBaby የልጃቸውን የእድገት ጉዞ እንዲደግፍ የሚያምኑ በመቶዎች የሚቆጠሩ ቤተሰቦችን ይቀላቀሉ። በአንድነት ለእያንዳንዱ ልጅ ብሩህ ጅምር መቅረጽ እንችላለን።",
      "cta.getStarted": "ዛሬ ይጀምሩ",
      "cta.learnMore": "ተጨማሪ ይወቁ",

      // About Page
      "about.title": "ስለ BeNovaBaby",
      "about.subtitle": "በኢትዮጵያ ውስጥ ለልጆች ብሩህ ወደፊት መገንባት፣ በአንድ ጊዜ አንድ ቤተሰብ።",
      "about.mission.p1":
        "በBeNovaBaby፣ የልጅ ህይወት የመጀመሪያዎቹ ዓመታት ማን እንደሚሆኑ በመቅረጽ ረገድ በጣም ኃይለኛ እንደሆኑ እናምናለን። በአዲስ አበባ፣ ኢትዮጵያ ውስጥ የምንገኝ ዓላማ ተኮር ኩባንያ ነን፣ ወላጆች እና አሳዳጊዎች ከ0-5 ዓመት የሆኑ ልጆችን እድገት እና ልማት እንዲደግፉ ለመርዳት ቆርጠናል።",
      "about.mission.principle": "ሥራችን የሚመሠረተው በአንድ መሪ መርህ ላይ ነው፡ እያንዳንዱ ልጅ ጠንካራ እና የተደገፈ የህይወት ጅምር ይገባዋል።",
      "about.mission.p2": "ለዚህም ነው የሚከተሉትን አንድ ላይ የሚያመጣ አጠቃላይ መድረክ የፈጠርነው፡",
      "about.mission.milestone": "የእድገት ደረጃ ክትትል",
      "about.mission.expert": "በባለሙያ የሚመራ ሀብቶች",
      "about.mission.materials": "የተመረጡ የመጫወቻ ቁሳቁሶች",
      "about.mission.community": "ህያው የወላጆች ማህበረሰብ",
      "about.mission.conclusion": "በአንድነት ለእያንዳንዱ ልጅ ብሩህ ጅምር መቅረጽ እንችላለን።",
      "about.playBased.title": "በመጫወት ላይ የተመሠረተ ትምህርት",
      "about.playBased.description": "ትምህርትን አስደሳች እና ተፈጥሯዊ የሚያደርጉ አሳታፊ እንቅስቃሴዎች",
      "about.parentSupport.title": "የወላጆች ድጋፍ",
      "about.parentSupport.description": "ለተአማኒ የወላጅነት መመሪያ እና ማህበረሰብ",
      "about.developmentTracking.title": "የእድገት ክትትል",
      "about.developmentTracking.description": "የተገኘውን እያንዳንዱን እድገት ደረጃ ይከታተሉ እና ያክብሩ",

      // Contact Page
      "contact.title": "ያግኙን",
      "contact.subtitle": "ከእርስዎ መስማት እንወዳለን! ጥያቄዎች፣ አስተያየቶች ወይም ማህበረሰባችንን ስለመቀላቀል ለመማር ያግኙን።",
      "contact.form.title": "መልእክት ይላኩልን",
      "contact.form.name": "ሙሉ ስም",
      "contact.form.email": "የኢሜይል አድራሻ",
      "contact.form.message": "መልእክት",
      "contact.form.namePlaceholder": "ሙሉ ስምዎን ያስገቡ",
      "contact.form.emailPlaceholder": "የኢሜይል አድራሻዎን ያስገቡ",
      "contact.form.messagePlaceholder": "እንዴት ልንረዳዎ እንደምንችል ይንገሩን...",
      "contact.form.send": "መልእክት ላክ",
      "contact.info.title": "የመገናኛ መረጃ",
      "contact.info.location": "አድራሻ",
      "contact.info.locationDetails1": "አዲስ አበባ፣ ኢትዮጵያ",
      "contact.info.locationDetails2": "በሀገር አቀፍ ደረጃ ቤተሰቦችን እናገለግላለን",
      "contact.info.phone": "ስልክ",
      "contact.info.phoneDetails1": "+251 11 XXX XXXX",
      "contact.info.phoneDetails2": "ሰኞ-አርብ 9ሰዓት-6ሰዓት EAT",
      "contact.info.email": "ኢሜይል",
      "contact.info.emailDetails1": "hello@benovababy.com",
      "contact.info.emailDetails2": "support@benovababy.com",
      "contact.info.hours": "የስራ ሰዓታት",
      "contact.info.hoursDetails1": "ሰኞ - አርብ፡ 9ሰዓት - 6ሰዓት",
      "contact.info.hoursDetails2": "ቅዳሜ፡ 10ሰዓት - 4ሰዓት",
      "contact.social.title": "ይከተሉን",
      "contact.social.subtitle": "ተገናኝተው ይቆዩ እና ስለ ልጅ ልማት ምክሮች እና የማህበረሰብ ዝግጅቶች የቅርብ ጊዜ ዝመናዎችን ያግኙ።",
      "contact.map": "በአዲስ አበባ ያግኙን",

      // Footer
      "footer.description":
        "በኢትዮጵያ ውስጥ ለእያንዳንዱ ልጅ ብሩህ ጅምር መገንባት። ወላጆችን ማብቃት እና ከ0-5 ዓመት ልጆችን በአጠቃላይ የቅድመ ህፃናት ልማት ሀብቶች ማበልጸግ።",
      "footer.madeWith": "በአዲስ አበባ በፍቅር የተሰራ",
      "footer.quickLinks": "ፈጣን አገናኞች",
      "footer.contactInfo": "የመገናኛ መረጃ",
      "footer.copyright": "BeNovaBaby። ሁሉም መብቶች የተጠበቁ ናቸው።",
      "footer.tagline": "እያንዳንዱ ልጅ ጠንካራ እና የተደገፈ የህይወት ጅምር ይገባዋል።",
      "footer.privacyPolicy": "የግላዊነት ፖሊሲ",

      // Navigation items
      "navigation.home": "መነሻ",
      "navigation.about": "ስለ እኛ",
      "navigation.contact": "ያግኙን",
      "navigation.joinCommunity": "ማህበረሰብ ይቀላቀሉ",
    },
  }

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
