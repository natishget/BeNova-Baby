"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const page = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex justify-center align-center pt-10 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <div className="w-[80%] flex flex-col align-center justify-center gap-20">
        <h1 className="text-center text-5xl font-bold">
          <span className="font-normal">𝓞</span>ur{" "}
          <span className="font-normal">𝓑</span>logs
        </h1>
        <div className="flex md:flex-row flex-col justify-evenly mb-28">
          <Link
            href="/blog1"
            className="w-full md:w-[35%] md:hover:w-[36%] cursor-pointer text-center flex flex-col align-center justify-center gap-5 bg-blue-50  rounded-xl drop-shadow-2xl "
          >
            <div className="h-44 overflow-hidden ">
              <Image
                src="blog12.jpg"
                alt="blog image"
                width={300}
                height={200}
                className="object-fill w-full rounded-t-xl"
              />
            </div>
            <h1 className="text-xl font-bold mx-3">{t("blog.blogTitle1")}</h1>
            <p className="mx-3 mb-16">{t("blog.blogDescription1")}</p>
          </Link>

          <Link
            href="/blog2"
            className="w-full md:w-[35%] md:hover:w-[36%] mt-5 md:mt-0 text-center flex flex-col align-center justify-center gap-5 bg-blue-50  rounded-xl drop-shadow-2xl "
          >
            <div className="h-44 overflow-hidden ">
              <Image
                src="blog22.png"
                alt="blog image"
                width={300}
                height={200}
                className="object-fill w-full rounded-t-xl"
              />
            </div>
            <h1 className="text-xl font-bold mx-3">{t("blog.blogTitle2")}</h1>
            <p className="mx-3 mb-16">{t("blog.blogDescription2")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
