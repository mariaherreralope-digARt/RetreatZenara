import { Building2, Layers, MapPin } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    icon: <Building2 className="w-12 h-12 text-btt" strokeWidth={1.5} />,
    title: "Exclusive Locations",
    description:
      "Our retreats",
  },
  {
    icon: <Layers className="w-12 h-12 text-btt" strokeWidth={1.5} />,
    title: "Holistic Experiences",  
    description:
      "Activities, and relaxation",
  },
  { icon: <MapPin className="w-12 h-12 text-btt" strokeWidth={1.5} />,
    title: "Personalized Service",
    description:
      "Our team",
  },
];

export default function SFeaturesDivideLineIcons() {
  return (
    <div className="bg-lighter py-10 ">
      <div className="max-w-4xl mx-auto py-16 md:pt-0  sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center  divide-y-[3px] divide-light/30  md:divide-x-[3px] md:divide-y-0">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center px-8 py-12">
            <div className="mb-6 ">{f.icon}</div>
            <h3 className=" title-italic-boxed  not-italic font-normal text-dark mb-4">{f.title}</h3>
            <p className="text-darker paragraph">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}