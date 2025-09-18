import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" flex p-20 gap-28 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <Image src="/blog2.png" alt="Smilling kids" width={800} height={200} />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">
          A Day of Learning, Connection & Awareness: Celebrating Every Child's
          Journeyia
        </h1>
        <p className="">
          On April 12th, 2025, something truly meaningful unfolded. Nova Kids,
          in collaboration with ICAN Academy and IVY Childcare & Therapy, hosted
          a heartfelt workshop for parents, caregivers, and early childhood
          experts. The event brought together learning, connection, and
          compassion—centered around supporting children in their earliest and
          most formative years. In honor of World Autism Acceptance Month, the
          gathering created a safe, inclusive space where love, empathy, and
          curiosity came together for one important cause: helping every child
          thrive. One of the most impactful sessions was led by Dr. Yohannes,
          who broke down the science behind autism, and helped attendees
          understand the difference between autism and intellectual disability.
          He gently guided us through the common characteristics many children
          under the autism spectrum share, helping caregivers observe with more
          clarity, not fear. Together, we explored the insightful book “Ten
          Things Every Child with Autism Wishes You Knew.” With Ms. Hermal’s
          guidance, the message rang clear: children with autism are different,
          not less. Just like every child, they bring their own way of seeing
          and experiencing the world—something to understand and embrace, not to
          fix. For Nova Kids, this workshop was a beautiful reflection of our
          mission: to equip families with the tools, knowledge, and connection
          they need to nurture their children—whether through our milestone
          tracker, curated toy kits, or events like this that bring us all
          closer. As we continue to honor Autism Acceptance Month, we carry with
          us the insight and warmth from this day. Every child deserves to be
          understood, supported, and celebrated for who they are. And every
          caregiver deserves to feel confident and equipped in their journey. To
          everyone who joined us—thank you. Your presence, your questions, your
          willingness to learn—it all matters. This is just the beginning of
          many more shared moments of growth, joy, and love.
        </p>
      </div>
    </div>
  );
};

export default page;
