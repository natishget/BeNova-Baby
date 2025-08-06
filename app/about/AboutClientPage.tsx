"use client";

import { Star, Heart, Users, Target } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { getTranslation } from "@/utils/translations";

export default function AboutClientPage() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  // const t = (key: string) => {
  //   const translations = {
  //     en: {
  //       "about.title": "Our Story",
  //       "about.subtitle": "Empowering Early Childhood Development in Ethiopia",
  //       "about.mission":
  //         "At BeNovaBaby, our mission is to provide comprehensive support for early childhood development in Ethiopia. We believe that every child deserves a strong, supported start in life.",
  //       "about.principle":
  //         "We are dedicated to creating a nurturing environment where children can thrive, learn, and grow to their fullest potential.",
  //       "about.offerings.milestones": "Developmental Milestones Tracking",
  //       "about.offerings.resources": "Educational Resources",
  //       "about.offerings.materials": "Quality Learning Materials",
  //       "about.offerings.community": "Supportive Community",
  //       "about.together": "Together, we can build a brighter future for Ethiopia's children.",
  //       "about.features.playLearning": "Play-Based Learning",
  //       "about.features.playDescription": "Engaging activities that make learning fun and effective.",
  //       "about.features.parentSupport": "Parental Support",
  //       "about.features.parentDescription": "Guidance and resources to help parents support their child's development.",
  //       "about.features.developmentTracking": "Development Tracking",
  //       "about.features.developmentDescription": "Monitor your child's progress and identify areas for growth.",
  //     },
  //     am: {
  //       "about.title": "የእኛ ታሪክ",
  //       "about.subtitle": "በኢትዮጵያ የቅድመ-ልጅነት እድገትን ማጎልበት",
  //       "about.mission":
  //         "በ BeNovaBaby፣ ተልእኳችን በኢትዮጵያ የቅድመ-ልጅነት እድገትን ሁሉን አቀፍ ድጋፍ መስጠት ነው። እያንዳንዱ ልጅ ጠንካራ እና የተደገፈ ጅምር ይገባዋል ብለን እናምናለን።",
  //       "about.principle": "ልጆች እንዲበለጽጉ፣ እንዲማሩ እና ሙሉ አቅማቸው እንዲያድጉ የሚያስችል ምቹ ሁኔታ ለመፍጠር ቁርጠኞች ነን።",
  //       "about.offerings.milestones": "የእድገት ምዕራፎች ክትትል",
  //       "about.offerings.resources": "የትምህርት ግብዓቶች",
  //       "about.offerings.materials": "ጥራት ያላቸው የትምህርት ቁሳቁሶች",
  //       "about.offerings.community": "የሚደግፍ ማህበረሰብ",
  //       "about.together": "በአንድነት፣ ለኢትዮጵያ ልጆች ብሩህ ተስፋ መገንባት እንችላለን።",
  //       "about.features.playLearning": "በጨዋታ ላይ የተመሰረተ ትምህርት",
  //       "about.features.playDescription": "ትምህርትን አስደሳች እና ውጤታማ የሚያደርጉ ማራኪ እንቅስቃሴዎች።",
  //       "about.features.parentSupport": "የወላጅ ድጋፍ",
  //       "about.features.parentDescription": "ወላጆች የልጃቸውን እድገት እንዲደግፉ ለመርዳት መመሪያ እና ግብዓቶች።",
  //       "about.features.developmentTracking": "የእድገት ክትትል",
  //       "about.features.developmentDescription": "የልጅዎን እድገት ይከታተሉ እና የእድገት ቦታዎችን ይለዩ።",
  //     },
  //   }

  //   return translations[language as keyof typeof translations]?.[key] || key
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mb-8 animate-twinkle">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("about.title")} BeNovaBaby
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-amber-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("about.mission")}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 my-8 border-l-4 border-amber-400">
                <p className="text-gray-800 font-medium text-lg italic">
                  {t("about.principle")}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t("about.principle")}
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t("about.offerings.milestones")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t("about.offerings.resources")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t("about.offerings.materials")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t("about.offerings.community")}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                — all in one place.
              </p>

              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl p-6 my-8 text-center">
                <p className="text-white font-semibold text-xl italic">
                  {t("about.together")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Elements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Child+Playing"
                  alt="Child playing with educational toys"
                  width={128}
                  height={128}
                  className="rounded-full animate-float"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("about.features.playLearning")}
              </h3>
              <p className="text-gray-600">
                {t("about.features.playDescription")}
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Parent+Child"
                  alt="Parent and child bonding"
                  width={128}
                  height={128}
                  className="rounded-full animate-float-delayed"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("about.features.parentSupport")}
              </h3>
              <p className="text-gray-600">
                {t("about.features.parentDescription")}
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Growth+Chart"
                  alt="Child development milestones"
                  width={128}
                  height={128}
                  className="rounded-full animate-float"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("about.features.developmentTracking")}
              </h3>
              <p className="text-gray-600">
                {t("about.features.developmentDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
