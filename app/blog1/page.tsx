"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import blogImage from "@/assests/blog1.jpg";

const page = () => {
  const { t } = useLanguage();
  return (
    <div className=" lg:flex py-20 px-10 md:px-10 gap-28 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <Image src="blog1.jpg" alt="Smiling kids" width={500} height={500} />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">{t("blogOne.blogHeader")}</h1>
        <p className="font-bold text-lg">{t("blogOne.blogTitle1")}</p>
        <p className="text-gray-600">{t("blogOne.blogDescription1")}</p>
        <p className="font-bold text-lg">{t("blogOne.blogTitle2")}</p>
        <p className="text-gray-600">{t("blogOne.blogDescription2")}</p>
        <p className="font-bold text-lg"> {t("blogOne.blogTitle3")}</p>
        <ul className="text-gray-600 list-disc">
          <li>{t("blogOne.blogDescriptionPoint")}</li>
          <li>{t("blogOne.blogDescriptionPoint1")}</li>
          <li>{t("blogOne.blogDescriptionPoint2")}</li>
          <li>{t("blogOne.blogDescriptionPoint3")}</li>
        </ul>
        <p className="font-bold text-lg">{t("blogOne.blogTitle4")}</p>
        <p className="text-gray-600">{t("blogOne.blogDescription4")}</p>
        <p className="font-bold text-lg">{t("blogOne.blogTitle5")}</p>
        <p className="text-gray-600">{t("blogOne.blogDescription5")}</p>
      </div>
    </div>
  );
};

export default page;
