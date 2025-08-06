"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Blocks, TrendingUp, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { getTranslation } from "@/utils/translations";

export default function Services() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const services = [
    {
      icon: Blocks,
      title: t("services.educationalToys.title"),
      description: t("services.educationalToys.description"),
      color: "from-pink-400 to-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: TrendingUp,
      title: t("services.milestoneTracking.title"),
      description: t("services.milestoneTracking.description"),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BookOpen,
      title: t("services.expertSessions.title"),
      description: t("services.expertSessions.description"),
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: t("services.parentSupport.title"),
      description: t("services.parentSupport.description"),
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("services.title")
              .split(" ")
              .map((word: string, i: number, arr: string[]) =>
                i === arr.length - 1 ? (
                  <span key={i}>
                    {" "}
                    <span className="text-white bg-clip-text gradient-bg">
                      {word}
                    </span>
                  </span>
                ) : (
                  <span key={i}>
                    {word}
                    {i < arr.length - 2 ? " " : ""}
                  </span>
                )
              )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`${service.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">
                {t("services.stats.families")}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">
                {t("services.stats.milestones")}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">
                {t("services.stats.resources")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
