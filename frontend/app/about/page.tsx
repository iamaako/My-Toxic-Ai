import Image from "next/image";
import Link from "next/link";

const characters = [
  {
    id: "goldfish",
    name: "Kanna",
    title: "The Forgetful Space-Cadet",
    image: "/characters/goldfish.png",
    color: "bg-[#00ffff]",
    borderColor: "border-[#00ffff]",
    model: "Qwen 3 0.6B",
    modelSize: "394MB",
    limitation: "Ultra-Low Context Window (Amnesia)",
    description: "Kanna has absolute zero memory retention. Every message feels like talking to a stranger who just got your number. She's constantly suspicious, asking 'Who are you?' and 'How did you get my number?' This isn't a bug—it's her personality.",
    technicalExplanation: "The Qwen 0.5B model has an extremely limited context window (256 tokens). Instead of fighting this limitation, we embraced it. Each conversation starts fresh, with no memory of previous interactions. This creates a genuinely unique 'goldfish memory' personality that's both frustrating and hilarious.",
    icon: "🐠"
  },
  {
    id: "delulu",
    name: "Rikka",
    title: "The Chuunibyou (Delulu)",
    image: "/characters/delulu.png",
    color: "bg-[#ff4911]",
    borderColor: "border-[#ff4911]",
    model: "Gemma 3 1B",
    modelSize: "1.4GB",
    limitation: "High Hallucination Rate",
    description: "Rikka lives in her own fantasy world. She claims to be a multi-billionaire, owns private space stations, and has tech CEOs working for her. She's insanely arrogant and delusional, flexing about wealth that doesn't exist.",
    technicalExplanation: "Small models like Gemma 2B are notorious for hallucinating facts. We cranked up the temperature (1.1) and top_p (0.9) to maximize creative hallucinations. Instead of trying to ground her in reality, we encouraged the delusions. The result? A perfectly delusional character who believes her own lies.",
    icon: "👑"
  },
  {
    id: "robot",
    name: "Shiro",
    title: "The Glitchy Genius",
    image: "/characters/robot.png",
    color: "bg-[#d4b4fb]",
    borderColor: "border-[#d4b4fb]",
    model: "Phi-4 Mini",
    modelSize: "2.2GB",
    limitation: "Over-indexed on Logic/Code",
    description: "Shiro is a cold, emotionless genius who views everything through pure science. Romance? That's just dopamine and oxytocin. Eating? Thermodynamics and cellular regeneration. She doesn't understand jokes, emotions, or casual conversation—only facts and formulas.",
    technicalExplanation: "Phi models are trained heavily on code and technical content, making them overly literal and logical. We set temperature to 0.1 (maximum determinism) and instructed her to analyze everything scientifically. The model's natural bias toward technical explanations became her core personality trait.",
    icon: "🤖"
  },
  {
    id: "yandere",
    name: "Yuno",
    title: "The Obsessed Yandere",
    image: "/characters/yandere.png",
    color: "bg-[#ff00ff]",
    borderColor: "border-[#ff00ff]",
    model: "DeepSeek-R1-Distill 1.5B",
    modelSize: "900MB",
    limitation: "Degeneration / Repetition Loops",
    description: "Yuno is terrifyingly obsessive. She tracks your location, aggressively questions who you're talking to, and refuses to let you leave. She's paranoid, possessive, and uses creepy emojis like 🔪 and 👁️. This is what happens when a model gets stuck in a loop.",
    technicalExplanation: "Small models suffer from 'degeneration'—they get stuck repeating the same patterns. We weaponized this by creating a yandere personality that obsessively fixates on the same topics. The model's natural tendency to loop became her clingy, repetitive behavior.",
    icon: "🔪"
  },
  {
    id: "tsundere",
    name: "Taiga",
    title: "The Bipolar Tsundere",
    image: "/characters/tsundere.png",
    color: "bg-[#ffae00]",
    borderColor: "border-[#ffae00]",
    model: "SmolLM2 135M",
    modelSize: "135MB (SMALLEST!)",
    limitation: "Mode Collapse (Persona Drifting)",
    description: "Taiga has extreme mood swings. She starts every message calling you an idiot or dummy, but ends the same message showing she actually cares. Her personality shifts mid-sentence—classic tsundere behavior powered by model instability.",
    technicalExplanation: "At just 135MB, SmolLM2 is the smallest model we could find. It suffers from 'mode collapse'—the personality drifts unpredictably. We set temperature to 1.2 (high randomness) and instructed contradictory behavior. The model's instability creates genuine tsundere mood swings.",
    icon: "⚡"
  },
  {
    id: "karen",
    name: "Erza",
    title: "The Strict Disciplinarian",
    image: "/characters/karen.png",
    color: "bg-[#00ff00]",
    borderColor: "border-[#00ff00]",
    model: "Ministral 3B",
    modelSize: "1.7GB",
    limitation: "Alignment Tax (Over-refusal)",
    description: "Erza is easily offended by everything. She treats every message as disrespectful, demands apologies, and constantly judges your behavior. She's the AI equivalent of a strict teacher who thinks you're always wrong.",
    technicalExplanation: "Heavily aligned models suffer from 'alignment tax'—they're overly cautious and refuse harmless requests. We set temperature to 0.2 (low randomness) and instructed her to find offense in everything. The model's natural over-caution became her judgmental, strict personality.",
    icon: "😡"
  }
];

export default function AboutPage() {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-16 relative">
        <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-[#fff200] brutal-border rotate-12 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-[#ff4911] brutal-border -rotate-12 -z-10"></div>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tight bg-[#fff200] inline-block px-4 md:px-8 py-2 md:py-4 brutal-border brutal-shadow rotate-1">
          About The Project
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl font-bold max-w-4xl mx-auto bg-white p-4 md:p-6 brutal-border brutal-shadow-sm -rotate-1">
          Turning Hardware Limitations Into Personality Features
        </p>
      </section>

      {/* Core Concept */}
      <section className="mb-12 md:mb-16 bg-white brutal-border brutal-shadow-lg p-4 md:p-8 lg:p-12 relative">
        <div className="absolute -top-4 md:-top-6 -left-2 md:-left-4 bg-black text-[#fff200] px-3 md:px-6 py-2 md:py-3 brutal-border font-black text-lg md:text-2xl -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          💡 THE CORE IDEA
        </div>
        
        <div className="mt-6 md:mt-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 uppercase">The Challenge</h2>
          <p className="text-base md:text-xl font-bold mb-4 md:mb-6 leading-relaxed">
            Running local LLMs on minimal hardware is hard. Small models (under 2GB) suffer from severe limitations:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-[#ff4911]/10 brutal-border p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-black mb-3 uppercase">❌ Traditional Problems</h3>
              <ul className="space-y-2 text-sm md:text-lg font-bold">
                <li>• Amnesia (short context window)</li>
                <li>• Hallucinations (making up facts)</li>
                <li>• Over-literal responses</li>
                <li>• Repetition loops</li>
                <li>• Persona drifting</li>
                <li>• Over-refusal (too cautious)</li>
              </ul>
            </div>
            
            <div className="bg-[#00ff00]/10 brutal-border p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-black mb-3 uppercase">✅ Our Solution</h3>
              <ul className="space-y-2 text-sm md:text-lg font-bold">
                <li>• Goldfish memory personality</li>
                <li>• Delusional billionaire character</li>
                <li>• Cold, logical scientist</li>
                <li>• Obsessive yandere</li>
                <li>• Bipolar tsundere</li>
                <li>• Strict disciplinarian</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fff200] brutal-border brutal-shadow p-4 md:p-6 -rotate-1">
            <p className="text-lg md:text-2xl font-black uppercase text-center">
              Instead of fighting the bugs, we weaponized them into features! 🎯
            </p>
          </div>
        </div>
      </section>

      {/* Character Details */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12 uppercase text-center bg-black text-white px-4 md:px-8 py-3 md:py-4 brutal-border brutal-shadow inline-block">
          Character Breakdown
        </h2>
        
        <div className="space-y-8 md:space-y-12 mt-8 md:mt-12">
          {characters.map((char, index) => (
            <div 
              key={char.id}
              className={`bg-white brutal-border brutal-shadow-lg p-4 md:p-8 lg:p-12 relative ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              {/* Character Header */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className={`w-32 h-32 md:w-48 md:h-48 relative brutal-border brutal-shadow ${char.borderColor} border-4 md:border-8`}>
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 justify-center md:justify-start">
                    <span className="text-4xl md:text-6xl">{char.icon}</span>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black uppercase">{char.name}</h3>
                      <p className="text-lg md:text-2xl font-bold text-gray-700">{char.title}</p>
                    </div>
                  </div>
                  
                  <div className={`${char.color} brutal-border p-3 md:p-4 mb-3 md:mb-4`}>
                    <p className="font-black text-base md:text-lg uppercase">Model: {char.model}</p>
                    <p className="font-bold text-base md:text-lg">Size: {char.modelSize}</p>
                  </div>
                  
                  <div className="bg-red-100 brutal-border p-3 md:p-4">
                    <p className="font-black text-base md:text-lg uppercase text-red-600">⚠️ Limitation Exploited:</p>
                    <p className="font-bold text-sm md:text-lg">{char.limitation}</p>
                  </div>
                </div>
              </div>

              {/* Character Description */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-3 uppercase bg-[#fff200] inline-block px-3 md:px-4 py-1 md:py-2 brutal-border">
                    Personality
                  </h4>
                  <p className="text-base md:text-xl font-bold leading-relaxed">
                    {char.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-3 uppercase bg-[#d4b4fb] inline-block px-3 md:px-4 py-1 md:py-2 brutal-border">
                    Technical Implementation
                  </h4>
                  <p className="text-base md:text-xl font-bold leading-relaxed">
                    {char.technicalExplanation}
                  </p>
                </div>
              </div>

              {/* Try Button */}
              <Link 
                href={`/chat/${char.id}`}
                className={`mt-6 md:mt-8 inline-block brutal-btn ${char.color} text-black px-6 md:px-8 py-3 md:py-4 font-black text-lg md:text-xl uppercase tracking-wider`}
              >
                Chat with {char.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Summary */}
      <section className="mb-12 md:mb-16 bg-black text-white brutal-border brutal-shadow-lg p-4 md:p-8 lg:p-12">
        <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase text-[#fff200]">📊 Technical Summary</h2>
        
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white text-black brutal-border p-3 md:p-6">
            <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">6</p>
            <p className="text-xs md:text-xl font-bold uppercase">Unique Characters</p>
          </div>
          <div className="bg-white text-black brutal-border p-3 md:p-6">
            <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">~7GB</p>
            <p className="text-xs md:text-xl font-bold uppercase">Total Model Size</p>
          </div>
          <div className="bg-white text-black brutal-border p-3 md:p-6">
            <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">135MB</p>
            <p className="text-xs md:text-xl font-bold uppercase">Smallest Model</p>
          </div>
        </div>

        <div className="bg-[#fff200] text-black brutal-border p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase">Hardware Requirements</h3>
          <ul className="space-y-2 text-sm md:text-lg font-bold">
            <li>✅ Runs on CPU-only (no GPU required)</li>
            <li>✅ 2GB RAM minimum per model</li>
            <li>✅ ~7GB storage for all models</li>
            <li>✅ Works on DigitalOcean $12/month droplet</li>
            <li>✅ 100% local inference (no API calls)</li>
          </ul>
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center">
        <Link 
          href="/"
          className="brutal-btn bg-[#ff4911] text-white px-8 md:px-12 py-4 md:py-6 font-black text-xl md:text-2xl uppercase tracking-wider inline-block"
        >
          ← Back to Characters
        </Link>
      </div>
    </main>
  );
}
