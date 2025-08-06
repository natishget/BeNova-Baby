"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "@/components/language-switcher";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10  flex items-center justify-center">
                {/* <div className="w-6 h-6 bg-blue-800 rounded-full relative">
                  <div className="absolute -top-1 -right-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current animate-twinkle" />
                  </div>
                </div> */}
                <Image
                  src="/novaLogo.png?height=600&width=600&text=Happy+Children+Playing"
                  width={60}
                  height={60}
                  alt="bonovababy logo"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-500">
                BeNova Baby
              </span>
              <span className="text-xs text-gray-600 -mt-1">
                Parenting is Better Together
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-medium px-6">
              {t("navigation.joinCommunity")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 rounded-lg ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {/* <Button className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-medium"> */}
                <a
                  href="https://t.me/NovaKids_Et"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-medium py-2 px-4 rounded"
                >
                  {t("navigation.joinCommunity")}
                </a>
                {/* </Button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
