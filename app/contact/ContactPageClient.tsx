"use client";

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import SocialLinks from "@/components/social-links";
import { useLanguage } from "@/contexts/language-context";
import { getTranslation } from "@/utils/translations";

export default function ContactPageClient() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.form.title")}
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("contact.map")}
                </h3>
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.793651652632!2d38.77777248519823!3d8.991126468040033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855778070945%3A0xd4a03d365a0219df!2sNile%20source%20building!5e0!3m2!1sam!2set!4v1755004282013!5m2!1sam!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1rem" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BeNovaBaby Location in Addis Ababa, Ethiopia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
