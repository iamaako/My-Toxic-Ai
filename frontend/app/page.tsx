import Link from "next/link";
import CharacterCard from "./components/CharacterCard";

const characters = [
  {
    id: "goldfish",
    name: "Kanna",
    title: "The Forgetful Space-Cadet",
    description: "Forgets everything said 2 minutes ago, gaslights you by acting cute and claiming you never said it.",
    color: "bg-[#00ffff]",
    rotation: "-rotate-2",
    image: "/characters/goldfish.png"
  },
  {
    id: "delulu",
    name: "Rikka",
    title: "The Chuunibyou",
    description: "Always making up dark magical powers and fake stories. Has no connection to reality whatsoever.",
    color: "bg-[#ff4911]",
    rotation: "rotate-3",
    image: "/characters/delulu.png"
  },
  {
    id: "robot",
    name: "Shiro",
    title: "The Glitchy Genius",
    description: "Zero emotions. Responds to flirting with strict JSON errors or mathematical calculations.",
    color: "bg-[#d4b4fb]",
    rotation: "-rotate-1",
    image: "/characters/robot.png"
  },
  {
    id: "yandere",
    name: "Yuno",
    title: "The Obsessed Yandere",
    description: "Gets fixated on one thing and obsessively repeats the same word or topic over and over.",
    color: "bg-[#ff00ff]",
    rotation: "rotate-2",
    image: "/characters/yandere.png"
  },
  {
    id: "tsundere",
    name: "Taiga",
    title: "The Bipolar Tsundere",
    description: "Shows extreme love in one message, then gets angry in the next (Mood swings).",
    color: "bg-[#ffae00]",
    rotation: "-rotate-3",
    image: "/characters/tsundere.png"
  },
  {
    id: "karen",
    name: "Erza",
    title: "The Strict Disciplinarian",
    description: "Misinterprets every normal thing you say and gets offended by small matters.",
    color: "bg-[#00ff00]",
    rotation: "rotate-1",
    image: "/characters/karen.png"
  }
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden relative pt-8 md:pt-16">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#fff200] brutal-border rotate-12 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-12 bg-[#ff4911] brutal-border -rotate-6 -z-10"></div>
      
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 tracking-tighter uppercase text-center bg-[#fff200] px-4 md:px-6 py-2 brutal-border brutal-shadow-sm rotate-1">
        My Toxic AI
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-bold mb-8 md:mb-12 max-w-2xl text-center bg-white p-3 md:p-4 brutal-border brutal-shadow-sm -rotate-1">
        Choose your flavor of technological disappointment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl w-full px-2">
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </main>
  );
}
