/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export default function About() {
  return (
    <div className="relative bg-blue-300 h-screen overflow-hidden">
      <div className="
      grid grid-rows-4">
        <div className="
      ml-5 px-12 py-10 row-span-2  
      "></div>
      <div className="
      ml-5 px-12 py-10 row-span-2  
      ">
        <div>
          <h2 className="text-base text-orange-600
          text-2xl 
          font-semibold
          text-center  tracking-wide uppercase">
            Origin Story
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
            Riding the Wave of Web3
          </p>
          <p
            className="mt-4 
          text-xl text-center text-gray-500
          pb-18 md:mx-auto"
          >
            Shiba Inu was peering into the metaverse and was soon sucked through his computer like tron legacy and landed on an island in the metaverse. As he spent days on the island, making fires and hunting, he started to become very bored. One day he woke up and saw a dolphin riding the waves... That is when he decided to cut down a palm tree and create a surfboard. He then rode the metawaves of the virtual universe. 
            Shiba Inu was peering into the metaverse and was soon sucked through his computer like tron legacy and landed on an island in the metaverse. As he spent days on the island, making fires and hunting, he started to become very bored. One day he woke up and saw a dolphin riding the waves... That is when he decided to cut down a palm tree and create a surfboard. He then rode the metawaves of the virtual universe. 
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}
