"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-amber-200">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("cta.badge")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("cta.title")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i}>
                      {" "}
                      <span className="text-white bg-gradient-to-r from-blue-500 to-blue-700">
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

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/NovaKids_Et">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("cta.getStarted")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  {t("cta.learnMore")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/goodStart1.jpeg?height=500&width=500&text=Parent+Child+Learning"
                alt="Parent and child learning together with educational materials"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
}
