import React from "react";
import { getTranslation } from "@/utils/translations";
import { useLanguage } from "@/contexts/language-context";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  return (
    <section className="w-full flex flex-col justify-center items-center pt-5 pb-16">
      <h1 className="text-5xl font-bold text-gray-900 mt-16">Testimonials</h1>
      <p className="text-gray-600 mb-16 mt-3">What people say about us</p>
      <div className=" flex gap-10 flex-col md:flex-row md: md:flex-wrap justify-center items-center text-lg h-full">
        <div className="md:w-1/4 w-[85%] h-full flex flex-col items-center justify-center bg-white p-5  rounded-[20px] shadow-xl hover:rounded-[0px] shadow-xl transition-all duration-300">
          <p className="text-center">
            <span className="text-blue-700 text-2xl">“</span>
            {t("about.testimonials.firstTestimony")}
            <span className="text-blue-700 text-2xl">”</span>
          </p>
          <h3 className="mt-5 text-blue-700 font-bold text-lg text-center">
            —{t("about.testimonials.firstName")}
          </h3>
        </div>
        <div className="md:w-1/4 w-[85%] h-full flex flex-col items-center justify-center bg-white p-5  rounded-[20px] hover:rounded-[0px] shadow-xl transition-all duration-300">
          <p className="text-center">
            <span className="text-blue-700 text-2xl">“</span>
            {t("about.testimonials.secondTestimony")}
            <span className="text-blue-700 text-2xl">”</span>
          </p>
          <h3 className="mt-5 text-blue-700 font-bold text-lg text-center">
            —{t("about.testimonials.secondName")}
          </h3>
        </div>
        <div className="md:w-1/4 w-[85%] h-full flex flex-col items-center justify-center bg-white p-5 rounded-[20px] shadow-xl hover:rounded-[0px] shadow-xl transition-all duration-300">
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
    </section>
  );
};

export default Testimonials;
