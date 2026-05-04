"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { use } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const characters: Record<string, { name: string; color: string; bgColor: string }> = {
  goldfish: { name: "Kanna", color: "border-[#00ffff]", bgColor: "bg-[#00ffff]" },
  delulu: { name: "Rikka", color: "border-[#ff4911]", bgColor: "bg-[#ff4911]" },
  robot: { name: "Shiro", color: "border-[#d4b4fb]", bgColor: "bg-[#d4b4fb]" },
  yandere: { name: "Yuno", color: "border-[#ff00ff]", bgColor: "bg-[#ff00ff]" },
  tsundere: { name: "Taiga", color: "border-[#ffae00]", bgColor: "bg-[#ffae00]" },
  karen: { name: "Erza", color: "border-[#00ff00]", bgColor: "bg-[#00ff00]" }
};

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const character = characters[id] || characters.goldfish; // fallback

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem(`chat_${id}`);
      if (saved) {
        try { 
          const parsed = JSON.parse(saved);
          // Prevent unnecessary state updates if data hasn't changed
          setMessages((prev) => JSON.stringify(prev) !== saved ? parsed : prev);
          
          // If the last message is from the user, the AI is still typing in the background
          if (parsed.length > 0 && parsed[parsed.length - 1].role === "user") {
            setLoading(true);
          } else {
            setLoading(false);
          }
        } catch (e) {}
      }
    };

    loadData();
    // Poll every second to catch background fetch completions if user navigated away and back
    const interval = setInterval(loadData, 1000);
    return () => clearInterval(interval);
  }, [id]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${id}`, JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages, loading, id]);

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(`chat_${id}`);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to UI
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          character_id: id,
          message: userMessage,
          chat_history: messages
        })
      });

      if (!response.ok) throw new Error("Failed to fetch response");
      
      const data = await response.json();
      const finalMessages: Message[] = [...newMessages, { role: "assistant", content: data.response }];
      
      // Force save to localStorage instantly so it's not lost if user navigated away
      localStorage.setItem(`chat_${id}`, JSON.stringify(finalMessages));
      setMessages(finalMessages);
    } catch (error) {
      console.error(error);
      const errorMessages: Message[] = [...newMessages, { role: "assistant", content: "ERROR: Connection failed. The backend might be sleeping or the LLM is broken." }];
      localStorage.setItem(`chat_${id}`, JSON.stringify(errorMessages));
      setMessages(errorMessages);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-yellow-50 md:p-6 lg:p-8 relative">
      {/* Centered Chat Container */}
      <div className="flex flex-col h-screen md:h-[90vh] w-full max-w-4xl bg-white md:brutal-border md:brutal-shadow overflow-hidden relative z-10">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 gap-2 md:gap-4 flex-wrap bg-[#fefce8] border-b-4 border-black">
        <Link 
          href="/" 
          className="brutal-btn bg-[#ff4911] text-white px-3 md:px-6 py-2 md:py-3 font-black text-sm md:text-xl uppercase tracking-wider text-center"
        >
          ← Back
        </Link>
        <div className={`brutal-border brutal-shadow-sm px-3 md:px-6 py-2 md:py-3 font-black text-sm md:text-xl uppercase bg-white flex items-center gap-2 md:gap-3 flex-1 justify-center min-w-[200px]`}>
          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${character.bgColor} border-2 border-black`}></div>
          <span className="truncate">Chatting with {character.name}</span>
        </div>
        <button 
          onClick={clearChat}
          className="brutal-btn bg-black text-white px-3 md:px-4 py-2 md:py-3 font-black text-xs md:text-lg uppercase tracking-wider"
        >
          Clear
        </button>
      </header>

      {/* Chat Area */}
      <main className="flex-1 bg-white brutal-border mx-2 md:mx-4 my-2 md:my-4 overflow-y-auto p-3 md:p-6 flex flex-col gap-3 md:gap-4 relative">
        {messages.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
            <span className="text-2xl md:text-4xl font-black uppercase rotate-[-5deg] text-gray-300">Start the chaos</span>
          </div>
        )}

        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`
              max-w-[90%] md:max-w-[75%] p-3 md:p-4 font-bold text-sm md:text-base relative
              ${msg.role === "user" 
                ? "bg-[#fff200] brutal-border brutal-shadow-sm" 
                : `bg-white border-4 border-black ${character.color} border-l-8 brutal-shadow-sm`}
            `}>
              {msg.role === "assistant" && (
                <div className="absolute -top-2 md:-top-3 -left-1 md:-left-2 bg-black text-white text-xs px-2 py-1 font-black uppercase">
                  {character.name}
                </div>
              )}
              {msg.role === "user" && (
                <div className="absolute -top-2 md:-top-3 -right-1 md:-right-2 bg-black text-[#fff200] text-xs px-2 py-1 font-black uppercase">
                  You
                </div>
              )}
              <div className="whitespace-pre-wrap leading-relaxed break-words">{msg.content}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className={`bg-white border-4 border-black ${character.color} border-l-8 brutal-shadow-sm p-3 md:p-4 font-black italic text-sm md:text-base`}>
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="flex gap-2 md:gap-4 p-2 md:p-4 bg-[#fefce8]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 brutal-border brutal-shadow-sm p-3 md:p-4 text-base md:text-xl font-bold focus:outline-none focus:bg-gray-100 placeholder-gray-500"
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-[#ff4911] text-white px-4 md:px-8 brutal-btn font-black text-lg md:text-2xl uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
      </div>
    </div>
  );
}
