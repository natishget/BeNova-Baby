"use client";
import Link from "next/link";
import { Star, Heart, MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-15 h-15  flex items-center justify-center">
                  <Image
                    src="/novaLogo.png?height=600&width=600&text=Happy+Children+Playing"
                    width={60}
                    height={60}
                    alt="bonovababy logo"
                  />
                </div>
              </div>
              <div className="flex flex-col pl-5">
                <span className="text-xl font-bold text-amber-400">
                  BeNova Baby
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  Parenting is Better Together
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center text-amber-400">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">{t("footer.madeWith")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {t("navigation.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  BlueSpace 5th floor - Nile Source Building, Addis Ababa,
                  Ethiopia
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@benovababy.com"
                  className="flex items-start space-x-2"
                >
                  <Mail className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm hover:text-amber-400 transition-color">
                    info@benovababy.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+251968402771"
                  className="flex items-start space-x-2"
                >
                  <Phone className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm hover:text-amber-400 transition-color">
                    +251 968 402771
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
