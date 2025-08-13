"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Play,
  Pause,
} from "lucide-react";

import holisticKids from "@/assests/holisticKids.png";
import selam from "@/assests/selam.png";
import iCan from "@/assests/iCan.png";

const partners = [
  {
    id: 1,
    name: "Ato Bekele Tadesse",
    title: "Construction Manager",
    company: "Holistic Kids",
    avatar: "BT",
    rating: 5,
    text: "Ketar Aluminum has been our trusted partner for over 8 years. Their anodized profiles are of exceptional quality and their technical services are unmatched in Ethiopia.",
    color: "purple",
    companyLogo: holisticKids,
  },
  {
    id: 2,
    name: "W/ro Meron Haile",
    title: "Project Director",
    company: "Selam Children's Village",
    avatar: "MH",
    rating: 5,
    text: "The curtain wall systems provided by Ketar transformed our commercial building project. Professional installation and excellent customer service throughout.",
    color: "orange",
    companyLogo: selam,
  },
  {
    id: 3,
    name: "Ato Samuel Girma",
    title: "Getus Real Estate",
    company: "ICan Academy",
    avatar: "SG",
    rating: 5,
    text: "Outstanding quality aluminum doors and windows. Ketar's attention to detail and commitment to deadlines makes them our preferred supplier.",
    color: "purple",
    companyLogo: iCan,
  },
];

const InteractiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  const visiblePartners = getVisibleTestimonials();

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center mb-16">
        <h6 className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 px-4 py-2 rounded-full">
          Our Clients
        </h6>
        <h1 className="text-5xl font-bold mb-10">Some of Our Partners</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ">
          We take pride in our long-standing relationships with clients across
          Ethiopia's private and public sectors. Here are some of the esteemed
          organizations we've had the pleasure to work with.
        </p>
      </div>
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8">
            {visiblePartners.map((partner, index) => (
              <Card
                key={`${partner.id}-${currentIndex}`}
                className={`bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 transform ${
                  index === 1 ? "md:scale-105 md:z-10" : "md:scale-95"
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col justify-center items-center text-center gap-y-14">
                    <Image
                      src={partner.companyLogo}
                      alt=""
                      className="w-32  object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-500">
                      {partner.company}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="w-12 h-12 rounded-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full border-gray-400 text-gray-600 hover:bg-gray-50 bg-transparent ml-4"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-green-600 h-1 rounded-full transition-all duration-100"
            style={{
              width: `${((currentIndex + 1) / partners.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCarousel;
