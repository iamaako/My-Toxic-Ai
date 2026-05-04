"use client";

import Link from "next/link";
import { useState } from "react";

interface CharacterCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  rotation: string;
  image: string;
}

export default function CharacterCard({ id, name, title, description, color, rotation, image }: CharacterCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${rotation} cursor-pointer relative`}
      style={{
        height: "380px",
        perspective: "1200px",
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <Link
        href={`/chat/${id}`}
        className="block w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
        }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 brutal-card ${color} p-5 md:p-6 flex flex-col text-black`}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2 uppercase border-b-4 border-black pb-2 bg-white px-2 inline-block w-max max-w-full">
            {name}
          </h2>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 bg-black text-white px-2 py-1 inline-block w-max max-w-full">
            {title}
          </h3>
          <p className="text-base md:text-lg font-bold bg-white/80 p-3 md:p-4 brutal-border flex-1 leading-snug">
            {description}
          </p>
          <div className="mt-4 md:mt-5 bg-white brutal-border brutal-shadow-sm py-3 px-4 font-black text-center text-lg md:text-xl">
            TAP TO MEET →
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 brutal-card bg-black flex flex-col items-center justify-end overflow-visible"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Character image floats above the card */}
          <div
            className="absolute w-48 h-48 md:w-64 md:h-64"
            style={{
              bottom: "70px",
              transform: flipped ? "translateY(-20px) scale(1.2)" : "translateY(0px) scale(1)",
              filter: "drop-shadow(0px -8px 24px rgba(255,255,255,0.6)) drop-shadow(6px 6px 0px black)",
              transition: "transform 0.45s ease 0.35s",
            }}
          >
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>

          {/* Name badge at bottom */}
          <div
            className={`w-full py-3 md:py-4 px-4 md:px-6 ${color} flex items-center justify-between`}
            style={{ borderTop: "4px solid white" }}
          >
            <span className="font-black text-xl md:text-2xl uppercase text-black">{name}</span>
            <span className="font-bold text-black bg-white px-2 md:px-3 py-1 brutal-border text-xs md:text-sm">
              CHAT NOW →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
