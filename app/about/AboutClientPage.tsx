"use client";

import { Star, Heart, Users, Target, Eye, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { getTranslation } from "@/utils/translations";

export default function AboutClientPage() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mb-8 animate-twinkle">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("about.title")} BeNova Baby
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
              <h1 className="font-semibold text-lg">{t("about.WhoWeAre")}</h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("about.mission")}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 my-8 border-l-4 border-amber-400">
                {/* <p className="text-gray-800 font-medium text-lg italic">
                  {t("about.principle")}
                </p> */}

                <h3 className="font-semibold text-lg my-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  {t("about.ourMis")}
                </h3>
                <p className=" text-lg">{t("about.ourMission")}</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 my-8 border-r-4 border-blue-500">
                {/* <p className="text-gray-800 font-medium text-lg italic">
                  {t("about.principle")}
                </p> */}

                <h3 className="font-semibold text-lg my-3">
                  <Eye className="w-6 h-6 text-amber-600" />
                  {t("about.ourVis")}
                </h3>
                <p className=" text-lg">{t("about.ourVision")}</p>
              </div>

              <h1 className="font-semibold text-lg">{t("about.values")}</h1>
              <ul className="ml-5 mb-3">
                <li className="flex  items-center">
                  <ChevronRight className="w-6 h-6 text-blue-700" />
                  {t("about.ourValues1")}
                </li>
                <li className="flex  items-center">
                  <ChevronRight className="w-6 h-6 text-blue-700" />
                  {t("about.ourValues2")}
                </li>
                <li className="flex  items-center">
                  <ChevronRight className="w-6 h-6 text-blue-700" />
                  {t("about.ourValues3")}
                </li>
              </ul>

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
        <div className="max-w-[85%] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <Image
                  src="/learning.jpeg?height=128&width=128&text=Child+Playing"
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
                  src="/support.jpeg?height=128&width=128&text=Parent+Child"
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
                  src="/development.jpg?height=128&width=128&text=Growth+Chart"
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

      {/* <section className="w-full flex flex-col justify-center items-center pt-5 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 mt-16">Testimonials</h1>
        <p className="text-gray-600 mb-16 mt-3">What people say about us</p>
        <div className=" flex gap-10 flex-col md:flex-row md: md:flex-wrap justify-center items-center text-lg">
          <div className="md:w-1/4 w-[85%] flex flex-col items-center justify-center bg-white p-5  rounded-[20px] shadow-xl hover:rounded-[0px] shadow-xl transition-all">
            <p className="text-center">
              <span className="text-blue-700 text-2xl">“</span>
              {t("about.testimonials.firstTestimony")}
              <span className="text-blue-700 text-2xl">”</span>
            </p>
            <h3 className="mt-5 text-blue-700 font-bold text-lg text-center">
              —{t("about.testimonials.firstName")}
            </h3>
          </div>
          <div className="md:w-1/4 w-[85%] flex flex-col items-center justify-center bg-white p-5  rounded-[20px] hover:rounded-[0px] shadow-xl transition-all ">
            <p className="text-center">
              <span className="text-blue-700 text-2xl">“</span>
              {t("about.testimonials.secondTestimony")}
              <span className="text-blue-700 text-2xl">”</span>
            </p>
            <h3 className="mt-5 text-blue-700 font-bold text-lg text-center">
              —{t("about.testimonials.secondName")}
            </h3>
          </div>
          <div className="md:w-1/4 w-[85%] flex flex-col items-center justify-center bg-white p-5 rounded-[20px] shadow-xl hover:rounded-[0px] shadow-xl transition-all">
            <p className="text-center">
              <span className="text-blue-700 text-2xl">“</span>
              {t("about.testimonials.thirdTestimony")}

              <span className="text-blue-700 text-2xl">”</span>
            </p>
            <h3 className="mt-5 text-blue-700 font-bold text-lg text-center">
              —{t("about.testimonials.thirdName")}
            </h3>
          </div>
        </div>
      </section> */}
    </div>
  );
}
