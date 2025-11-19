import { Trash2, HeartPulse, SplitSquareHorizontal, Lightbulb, Leaf, MapPin } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    icon: <Trash2 className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Release Clutter",
    description:
      "Let go of mental noise and emotional heaviness that keep you stuck.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Restore Vitality",  
    description:
      "Calm your nervous system and return to a balanced, energized state.",
  },
  { icon: <SplitSquareHorizontal className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Break Old Patterns",
    description:
      "Create space for new habits, perspectives, and purposeful choices.",
  },
   { icon: <Lightbulb className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Ignite Clarity",
    description:
      "Reconnect with your intuition and uncover a clear sense of direction.",
  },
   { icon: <Leaf className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Feel Grounded",
    description:
      "Leave centered, open, and deeply connected to yourself.",
  },
];

export default function SFeaturesDivideLineIcons() {
  return (
    <div className=" bg-gradient-to-b from-transparent via-light/50 to-lighter py-16 md:pt-24 ">
      <div className="flex flex-col items-center text-center px-16 sm:px-6 lg:px-8 max-w-4xl mx-auto">
         <p className="oversection text-darker mb-6 ">
          Why It Works
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          The Zenara Difference
        </h2>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Transformation happens when the mind softens, the body releases tension, and your inner world finally has space to breathe. Zenara is designed to guide you back into alignment—gently, naturally, and with lasting clarity.
       
        </p>
        </div>

      <div className="max-w-7xl mx-auto py-16 md:pt-0  px-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center  divide-y-[3px] divide-light/30  md:divide-x-[3px] md:divide-y-0">
      
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center px-8 pt-8">
            <div className="mb-6 ">{f.icon}</div>
            <h3 className=" title-italic-boxed  text-sm not-italic font-normal text-dark mb-4">{f.title}</h3>
            <p className="text-darker paragraph pb-8 ">{f.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0  pointer-events-none" />
    </div>
  );
}