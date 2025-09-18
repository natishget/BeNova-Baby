import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex justify-center align-center pt-10 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <div className="w-[80%] flex flex-col align-center justify-center gap-20">
        <h1 className="text-center text-5xl font-bold">
          <span className="font-normal">𝓞</span>ur{" "}
          <span className="font-normal">𝓑</span>logs
        </h1>
        <div className="flex justify-evenly mb-28">
          <Link
            href="/blog1"
            className="w-[35%] hover:w-[36%] cursor-pointer text-center flex flex-col align-center justify-center gap-5 bg-blue-50  rounded-xl drop-shadow-2xl "
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
            <h1 className="text-xl font-bold mx-3">
              Why Nova Matters: Supporting Early Childhood Development in
              Ethiopia
            </h1>
            <p className="mx-3 mb-16">
              How Nova is transforming early childhood development in Ethiopia
              by equipping caregivers with the right tools, insight, and
              support.
            </p>
          </Link>

          <Link
            href="/blog2"
            className="w-[35%] hover:w-[36%]  text-center flex flex-col align-center justify-center gap-5 bg-blue-50  rounded-xl drop-shadow-2xl "
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
            <h1 className="text-xl font-bold mx-3">
              Celebrating Every Child's Journey: Autism Awareness Workshop
            </h1>
            <p className="mx-3 mb-16">
              A powerful day of learning, love, and connection in honor of
              Autism Acceptance Month hosted by Nova Kids and partners.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
