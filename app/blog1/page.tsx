import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" flex p-20 gap-28 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-50">
      <Image src="/blog1.jpg" alt="Smilling kids" width={600} height={200} />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">
          Why Nova Matters: Supporting Early Childhood Development in Ethiopia
        </h1>
        <p className="font-bold text-lg">Introduction</p>
        <p className="text-gray-600">
          Early Childhood Development (ECD) lays the foundation for lifelong
          health, learning, and well-being...
        </p>
        <p className="font-bold text-lg">The Urgent Need for Nova</p>
        <p className="text-gray-600">
          The early years of a child’s life are crucial. Science shows that a
          child’s brain develops most rapidly...
        </p>
        <p className="font-bold text-lg"> Key Challenges Nova Addresses</p>
        <ul className="text-gray-600 list-disc">
          <li>
            Lack of Access to Developmental Tools: Many families don’t have
            access to age-appropriate toys, books, or guidance.
          </li>
          <li>
            Low Awareness of Developmental Milestones: Caregivers often lack the
            knowledge to track progress and detect early delays.
          </li>
          <li>
            Limited Training Opportunities: Accessible, culturally relevant
            training is in short supply.
          </li>
          <li>
            Isolation: Many caregivers face these challenges alone without
            support networks.
          </li>
        </ul>
        <p className="font-bold text-lg">Why Nova is Different</p>
        <p className="text-gray-600">
          While national policies and programs exist, Nova complements these
          efforts using tech and local insight to reach families otherwise
          overlooked.
        </p>
        <p className="font-bold text-lg">Nova’s Impact</p>
        <p className="text-gray-600">
          Nova supports caregivers in understanding children's needs, improving
          school readiness, interrupting poverty cycles, and building stronger
          communities. By empowering caregivers, Nova makes early childhood
          development a shared, achievable journey.
        </p>
      </div>
    </div>
  );
};

export default page;
