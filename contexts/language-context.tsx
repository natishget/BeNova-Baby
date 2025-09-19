"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isClient, setIsClient] = useState(false);

  // Set client flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load language from localStorage on mount
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
        setLanguage(savedLanguage);
      }
    }
  }, [isClient]);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language);
      document.documentElement.lang = language;
    }
  }, [language, isClient]);

  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.blog": "Blog",
      "nav.joinCommunity": "Join Community",
      "nav.botJoin": "Telegram Bot",

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
      "about.subtitle":
        "Building a brighter future for children across Ethiopia, one family at a time.",
      "about.mission.p1":
        "At BeNovaBaby, we believe that the earliest years of a child's life are the most powerful in shaping who they become. We are a purpose-driven company based in Addis Ababa, Ethiopia, committed to helping parents and caregivers support the growth and development of children aged 0–5.",
      "about.mission.principle":
        "Our work is grounded in one guiding principle: Every child deserves a strong, supported start in life.",
      "about.mission.p2":
        "That's why we've created a holistic platform that brings together:",
      "about.mission.milestone": "Milestone tracking",
      "about.mission.expert": "Expert-led resources",
      "about.mission.materials": "Curated play materials",
      "about.mission.community": "A vibrant parent community",
      "about.mission.conclusion":
        "Together, we can shape a brighter start for every child.",
      "about.playBased.title": "Play-Based Learning",
      "about.playBased.description":
        "Engaging activities that make learning fun and natural",
      "about.parentSupport.title": "Parent Support",
      "about.parentSupport.description":
        "Guidance and community for confident parenting",
      "about.developmentTracking.title": "Development Tracking",
      "about.developmentTracking.description":
        "Monitor and celebrate every milestone achieved",

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
      "contact.info.locationDetails2":
        "BlueSpace 5th floor - Nile Source Building",
      "contact.info.phone": "Phone",
      "contact.info.phoneDetails1": "+251 968 402771",
      "contact.info.phoneDetails2": "Mon-Fri 9AM-6PM EAT",
      "contact.info.email": "Email",
      "contact.info.emailDetails1": "info@benovababy.com",
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
      "footer.tagline":
        "Every child deserves a strong, supported start in life.",
      "footer.privacyPolicy": "Privacy Policy",

      // Navigation items
      "navigation.home": "Home",
      "navigation.about": "About",
      "navigation.contact": "Contact",
      "navigation.blog": "Blog",
      "navigation.joinCommunity": "Join Community",
      "navigation.botJoin": "Telegram Bot",

      //blog items
      "blog.ourBlogO": "𝓞",
      "blog.ourBlogB": "𝓑",
      "blog.ourBlogUR": "ur",
      "blog.ourBlogLOG": "logs",
      "blog.blogTitle1":
        "Why Nova Matters: Supporting Early Childhood Development in Ethiopia",
      "blog.blogDescription1":
        "How Nova is transforming early childhood development in Ethiopia by equipping caregivers with the right tools, insight, and support.",
      "blog.blogTitle2":
        "Celebrating Every Child's Journey: Autism Awareness Workshop",
      "blog.blogDescription2":
        "A powerful day of learning, love, and connection in honor of Autism Acceptance Month hosted by Nova Kids and partners.",
      "blogOne.blogHeader":
        "Why Nova Matters: Supporting Early Childhood Development in Ethiopia",
      "blogOne.blogTitle1": "Introduction",
      "blogOne.blogDescription1":
        "Early Childhood Development (ECD) lays the foundation for lifelong health, learning, and well-being...",
      "blogOne.blogTitle2": "The Urgent Need for Nova",
      "blogOne.blogDescription2":
        " The early years of a child’s life are crucial. Science shows that a child’s brain develops most rapidly...",
      "blogOne.blogTitle3": "Key Challenges Nova Addresses",
      "blogOne.blogDescriptionPoint":
        "Lack of Access to Developmental Tools: Many families don’t have access to age-appropriate toys, books, or guidance.",
      "blogOne.blogDescriptionPoint1":
        "Low Awareness of Developmental Milestones: Caregivers often lack the knowledge to track progress and detect early delays.",
      "blogOne.blogDescriptionPoint2":
        "Limited Training Opportunities: Accessible, culturally relevant training is in short supply.",
      "blogOne.blogDescriptionPoint3":
        "Isolation: Many caregivers face these challenges alone without support networks.",
      "blogOne.blogTitle4": "Why Nova is Different",
      "blogOne.blogDescription4":
        "While national policies and programs exist, Nova complements these efforts using tech and local insight to reach families otherwise overlooked.",
      "blogOne.blogTitle5": "Nova’s Impact",
      "blogOne.blogDescription5":
        "Nova supports caregivers in understanding children's needs, improving school readiness, interrupting poverty cycles, and building stronger communities. By empowering caregivers, Nova makes early childhood development a shared, achievable journey.",
      "blogTwo.blogTitle":
        "A Day of Learning, Connection & Awareness: Celebrating Every Child's Journeyia",
      "blogTwo.blogDescription":
        "On April 12th, 2025, something truly meaningful unfolded. Nova Kids, in collaboration with ICAN Academy and IVY Childcare & Therapy, hosted a heartfelt workshop for parents, caregivers, and early childhood experts. The event brought together learning, connection, and compassion—centered around supporting children in their earliest and most formative years. In honor of World Autism Acceptance Month, the gathering created a safe, inclusive space where love, empathy, and curiosity came together for one important cause: helping every child thrive. One of the most impactful sessions was led by Dr. Yohannes, who broke down the science behind autism, and helped attendees understand the difference between autism and intellectual disability. He gently guided us through the common characteristics many children under the autism spectrum share, helping caregivers observe with more clarity, not fear. Together, we explored the insightful book “Ten Things Every Child with Autism Wishes You Knew.” With Ms. Hermal’s guidance, the message rang clear: children with autism are different, not less. Just like every child, they bring their own way of seeing and experiencing the world—something to understand and embrace, not to fix. For Nova Kids, this workshop was a beautiful reflection of our mission: to equip families with the tools, knowledge, and connection they need to nurture their children—whether through our milestone tracker, curated toy kits, or events like this that bring us all closer. As we continue to honor Autism Acceptance Month, we carry with us the insight and warmth from this day. Every child deserves to be understood, supported, and celebrated for who they are. And every caregiver deserves to feel confident and equipped in their journey. To everyone who joined us—thank you. Your presence, your questions, your willingness to learn—it all matters. This is just the beginning of many more shared moments of growth, joy, and love.",
    },
    am: {
      // Navigation
      "nav.home": "መነሻ",
      "nav.about": "ስለ እኛ",
      "nav.contact": "ያግኙን",
      "nav.blog": "ብሎግ",
      "nav.joinCommunity": "ማህበረሰብ ይቀላቀሉ",
      "nav.botJoin": "ቴሌግራም ቦት",

      // Hero Section
      "hero.badge": "ከ0-5 ዓመት ልማት",
      "hero.title": "ለእያንዳንዱ ልጅ ብሩህ ጅምር መገንባት",
      "hero.subtitle":
        "ወላጆችን ማብቃት። ልጆችን ማበልጸግ። በአዲስ አበባ ውስጥ ካሉት ማህበረሰብ ጋር ይቀላቀሉ ከ0-5 ዓመት የሆኑ ልጆችን እድገት እና ልማት እንደምንደግፍ።",
      "hero.exploreMore": "ተጨማሪ ያስሱ",
      "hero.joinCommunity": "ማህበረሰባችንን ይቀላቀሉ",

      // Services
      "services.title": "ልጅዎ ለማደግ የሚያስፈልገው ሁሉ",
      "services.subtitle":
        "የእኛ አጠቃላይ መድረክ የቅድመ ህፃናት ልማት አስፈላጊ ንጥረ ነገሮችን በአንድ ቦታ ያሰባስባል።",
      "services.educationalToys.title": "የትምህርት መጫወቻዎች",
      "services.educationalToys.description":
        "ለትናንሽ ልጆች ደህንነትን በማረጋገጥ ትምህርትን እና ፈጠራን የሚያነቃቁ በጥንቃቄ የተመረጡ የመጫወቻ ቁሳቁሶች።",
      "services.milestoneTracking.title": "የእድገት ደረጃ ክትትል",
      "services.milestoneTracking.description":
        "ለ0-5 ዓመት የተነደፈ አጠቃላይ የክትትል ስርዓታችንን በመጠቀም የልጅዎን የእድገት ጉዞ ይከታተሉ።",
      "services.expertSessions.title": "የባለሙያ ክፍለ ጊዜዎች",
      "services.expertSessions.description":
        "ለኢትዮጵያ ቤተሰቦች የተዘጋጁ የልጅ ልማት ባለሙያዎች እና የትምህርት ሀብቶች መዳረሻ።",
      "services.parentSupport.title": "የወላጆች ድጋፍ ማህበረሰብ",
      "services.parentSupport.description":
        "በአጋዥ እና ተረዳዳቢ የማህበረሰብ አካባቢ ውስጥ ከሌሎች ወላጆች እና አሳዳጊዎች ጋር ይገናኙ።",
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
      "about.mission.principle":
        "ሥራችን የሚመሠረተው በአንድ መሪ መርህ ላይ ነው፡ እያንዳንዱ ልጅ ጠንካራ እና የተደገፈ የህይወት ጅምር ይገባዋል።",
      "about.mission.p2": "ለዚህም ነው የሚከተሉትን አንድ ላይ የሚያመጣ አጠቃላይ መድረክ የፈጠርነው፡",
      "about.mission.milestone": "የእድገት ደረጃ ክትትል",
      "about.mission.expert": "በባለሙያ የሚመራ ሀብቶች",
      "about.mission.materials": "የተመረጡ የመጫወቻ ቁሳቁሶች",
      "about.mission.community": "ህያው የወላጆች ማህበረሰብ",
      "about.mission.conclusion": "በአንድነት ለእያንዳንዱ ልጅ ብሩህ ጅምር መቅረጽ እንችላለን።",
      "about.playBased.title": "በመጫወት ላይ የተመሠረተ ትምህርት",
      "about.playBased.description":
        "ትምህርትን አስደሳች እና ተፈጥሯዊ የሚያደርጉ አሳታፊ እንቅስቃሴዎች",
      "about.parentSupport.title": "የወላጆች ድጋፍ",
      "about.parentSupport.description": "ለተአማኒ የወላጅነት መመሪያ እና ማህበረሰብ",
      "about.developmentTracking.title": "የእድገት ክትትል",
      "about.developmentTracking.description":
        "የተገኘውን እያንዳንዱን እድገት ደረጃ ይከታተሉ እና ያክብሩ",

      // Contact Page
      "contact.title": "ያግኙን",
      "contact.subtitle":
        "ከእርስዎ መስማት እንወዳለን! ጥያቄዎች፣ አስተያየቶች ወይም ማህበረሰባችንን ስለመቀላቀል ለመማር ያግኙን።",
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
      "contact.info.locationDetails2": "ብሉስፔስ 5ኛ ፎቅ - አባይ ምንጭ ሕንፃ",
      "contact.info.phone": "ስልክ",
      "contact.info.phoneDetails1": "+251 968 402771",
      "contact.info.phoneDetails2": "ከሰኞ-አርብ 9AM-6PM EAT",
      "contact.info.email": "ኢሜይል",
      "contact.info.emailDetails1": "info@benovababy.com",
      "contact.info.emailDetails2": "",
      "contact.info.hours": "የስራ ሰዓታት",
      "contact.info.hoursDetails1": "ሰኞ - አርብ: 9AM - 6PM",
      "contact.info.hoursDetails2": "ቅዳሜ: 10AM - 4PM",
      "contact.social.title": "ይከተሉን",
      "contact.social.subtitle":
        "ተገናኝተው ይቆዩ እና ስለ ልጅ ልማት ምክሮች እና የማህበረሰብ ዝግጅቶች የቅርብ ጊዜ ዝመናዎችን ያግኙ።",
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
      "navigation.blog": "ብሎግ",
      "navigation.joinCommunity": "ማህበረሰብ ይቀላቀሉ",
      "navigation.botJoin": "ቴሌግራም ቦት",

      //blog items
      "blog.ourBlogO": "𝓞",
      "blog.ourBlogB": "𝓑",
      "blog.ourBlogUR": "ur",
      "blog.ourBlogLOG": "logs",
      "blog.blogTitle1": "ለምን ኖቫ አስፈላጊ ነው፡ በኢትዮጵያ ውስጥ ያለ የልጅነት እድገትን መደገፍ",
      "blog.blogDescription1":
        "ኖቫ ተንከባካቢዎችን በትክክለኛ መሳሪያዎች፣ ግንዛቤ እና ድጋፍ በማስታጠቅ የልጅነት እድገትን በኢትዮጵያ እንዴት እየለወጠ ነው።",
      "blog.blogTitle2": "የእያንዳንዱን ልጅ ጉዞ ማክበር፡ የኦቲዝም ግንዛቤ አውደ ጥናት",
      "blog.blogDescription2":
        "በኖቫ ኪድስ እና አጋሮች የሚስተናገደው የኦቲዝም ተቀባይነት ወርን ለማክበር ኃይለኛ የትምህርት፣ የፍቅር እና የግንኙነት ቀን።",
      "blogOne.blogHeader": "ምን ኖቫ አስፈላጊ ነው፡ በኢትዮጵያ ውስጥ ያለ የልጅነት እድገትን መደገፍ",
      "blogOne.blogTitle1": "መግቢያ",
      "blogOne.blogDescription1":
        "የቅድመ ልጅነት እድገት (ኢሲዲ) የዕድሜ ልክ ጤናን፣ ትምህርት እና ደህንነትን መሰረት ይጥላል...",
      "blogOne.blogTitle2": "ለኖቫ አስቸኳይ ፍላጎት",
      "blogOne.blogDescription2":
        "የሕፃኑ ህይወት የመጀመሪያዎቹ ዓመታት ወሳኝ ናቸው. ሳይንስ እንደሚያሳየው የህጻናት አእምሮ በፍጥነት...",
      "blogOne.blogTitle3": "የኖቫ አድራሻዎች ቁልፍ ተግዳሮቶች",
      "blogOne.blogDescriptionPoint":
        "የዕድገት መሳሪያዎች ተደራሽነት እጦት፡- ብዙ ቤተሰቦች ከእድሜ ጋር የሚስማሙ አሻንጉሊቶችን፣ መጽሃፎችን ወይም መመሪያዎችን ማግኘት አይችሉም።",
      "blogOne.blogDescriptionPoint1":
        "የዕድገት ደረጃዎች ዝቅተኛ ግንዛቤ፡ ተንከባካቢዎች ብዙውን ጊዜ እድገትን ለመከታተል እና ቀደምት መዘግየቶችን ለመለየት ዕውቀት ይጎድላቸዋል።",
      "blogOne.blogDescriptionPoint2":
        "ውሱን የሥልጠና እድሎች፡- ተደራሽ፣ ከባህል ጋር ተዛማጅነት ያለው ሥልጠና አጭር ነው።",
      "blogOne.blogDescriptionPoint3":
        "ማግለል፡- ብዙ ተንከባካቢዎች ያለ ድጋፍ መረቦች ብቻ እነዚህን ችግሮች ይጋፈጣሉ።",
      "blogOne.blogTitle4": "ለምን ኖቫ የተለየ ነው?",
      "blogOne.blogDescription4":
        "ብሄራዊ ፖሊሲዎች እና ፕሮግራሞች ቢኖሩም ኖቫ እነዚህን ጥረቶች በቴክ እና በአካባቢያዊ ግንዛቤ በመጠቀም ችላ የተባሉ ቤተሰቦችን ያሟላል።",
      "blogOne.blogTitle5": "የኖቫ ተፅእኖ",
      "blogOne.blogDescription5":
        "ኖቫ ተንከባካቢዎችን የልጆችን ፍላጎት ለመረዳት፣ የትምህርት ቤት ዝግጁነትን ለማሻሻል፣ የድህነት ዑደቶችን በማቋረጥ እና ጠንካራ ማህበረሰቦችን በመገንባት ይደግፋል። ተንከባካቢዎችን በማብቃት፣ ኖቫ የልጅነት ጊዜ እድገትን የጋራ፣ ሊደረስበት የሚችል ጉዞ ያደርገዋል።",
      "blogTwo.blogTitle": "የትምህርት፣ የግንኙነት እና የግንዛቤ ቀን፡ የእያንዳንዱን ልጅ ጉዞ ማክበር",
      "blogTwo.blogDescription":
        "በኤፕሪል 12፣ 2025፣ በእውነት ትርጉም ያለው ነገር ታየ። Nova Kids ከ ICAN Academy እና IVY Childcare & Therapy ጋር በመተባበር ለወላጆች፣ ለአሳዳጊዎች እና ለቅድመ ልጅነት ባለሙያዎች ልባዊ አውደ ጥናት አዘጋጅቷል። ክስተቱ መማርን፣ ግንኙነትን እና ርህራሄን ሰብስቧል—በመጀመሪያዎቹ እና በጣም የበለጸጉ አመታት ልጆችን በመደገፍ ላይ ያተኮረ። ለአለም ኦቲዝም ተቀባይነት ወርን ምክንያት በማድረግ፣ ስብሰባው ደህንነቱ የተጠበቀ እና አካታች ቦታን ፈጠረ፣ ፍቅር፣ መተሳሰብ እና የማወቅ ጉጉት ለአንድ አስፈላጊ ምክንያት አንድ ላይ ተሰባስበው እያንዳንዱ ልጅ እንዲዳብር መርዳት። በጣም ተፅዕኖ ካደረጉት ክፍለ-ጊዜዎች አንዱ በዶ/ር ዮሃንስ የተመራ ሲሆን ከኦቲዝም ጀርባ ያለውን ሳይንስ በማፍረስ ተሰብሳቢዎች በኦቲዝም እና በአእምሮ እክል መካከል ያለውን ልዩነት እንዲገነዘቡ ረድቷቸዋል። ብዙ በኦቲዝም ስፔክትረም ስር ባሉ የጋራ ባህሪያት ተንከባካቢዎች በፍርሃት ሳይሆን በግልፅ እንዲመለከቱ በመርዳት በእርጋታ መራን። አብረን፣ “ከኦቲዝም ምኞቶች ጋር ያለ ልጅ ሁሉ የምታውቋቸው አሥር ነገሮች” የሚለውን አስተዋይ መጽሐፍ መርምረናል። በወይዘሮ ሄርማል መመሪያ፣ መልእክቱ ግልጽ ሆኖ ነበር፡ ኦቲዝም ያለባቸው ልጆች የተለዩ እንጂ ያነሱ አይደሉም። ልክ እንደ እያንዳንዱ ልጅ ዓለምን ለማየት እና ለመለማመድ የራሳቸውን መንገድ ያመጣሉ - ሊረዱት እና ሊቀበሉት የሚገባ, ለመጠገን አይደለም. ለኖቫ ኪድስ፣ ይህ አውደ ጥናት የተልእኮአችን ቆንጆ ነጸብራቅ ነበር፡ ቤተሰቦች ልጆቻቸውን ለመንከባከብ የሚያስፈልጋቸውን መሳሪያዎች፣ እውቀት እና ግንኙነት ለማስታጠቅ—በእኛ ማይስተን ስታን መከታተያ፣ በተመረጡ የአሻንጉሊት እቃዎች ወይም እንደዚህ ባሉ ክስተቶች ሁላችንንም የሚያቀርቡልን። የኦቲዝም መቀበያ ወርን ማክበር ስንቀጥል፣ከዚህ ቀን ጀምሮ ያለውን ግንዛቤ እና ሙቀት ከእኛ ጋር ይዘናል። እያንዳንዱ ልጅ ስለ ማንነቱ ሊረዳ፣ ሊደገፍ እና ሊከበር ይገባዋል። እና እያንዳንዱ ተንከባካቢ በጉዟቸው ውስጥ በራስ የመተማመን እና የታጠቁ ሊሰማቸው ይገባል። ከእኛ ጋር ለተቀላቀሉት ሁሉ - አመሰግናለሁ። የአንተ መኖር፣ ጥያቄዎችህ፣ ለመማር ፈቃደኛነትህ - ሁሉም አስፈላጊ ነው። ይህ የብዙ የጋራ የእድገት፣ የደስታ እና የፍቅር ጊዜያት መጀመሪያ ነው።",
    },
  };

  type TranslationKeys =
    | keyof (typeof translations)["en"]
    | keyof (typeof translations)["am"];

  const t = (key: string): string => {
    return (
      translations[language][key as TranslationKeys] ||
      translations.en[key as TranslationKeys] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
