"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const page = () => {
  const { t } = useLanguage();
  return (
    <div className=" lg:flex py-20 px-10 lg:px-20 gap-28 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <Image src="/blog2.png" alt="Smilling kids" width={800} height={200} />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">{t("blogTwo.blogTitle")}</h1>
        <p className="">{t("blogTwo.blogDescription")}</p>
      </div>
    </div>
  );
};

export default page;
