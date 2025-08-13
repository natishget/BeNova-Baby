"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-60 animate-float" />
        <div className="absolute top-60 left-1/2 w-12 h-12 bg-green-200 rounded-full opacity-60 animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title")
                .split(" ")
                .map((word, i, arr) =>
                  i === 1 ? (
                    <span
                      key={i}
                      className="text-white bg-gradient-to-r from-blue-300 to-blue-400"
                    >
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 ? " " : ""}
                    </span>
                  )
                )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("hero.exploreMore")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://t.me/NovaKids_Et" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  {t("hero.joinCommunity")}
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/goodStart.jpg?height=600&width=600&text=Happy+Children+Playing"
                alt="Happy children playing and learning together"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating elements around the image */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center animate-float shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-float-delayed shadow-lg">
              <span className="text-2xl">🌟</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-xl">💝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
