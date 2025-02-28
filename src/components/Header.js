import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="/">
        <h1 className="text-4xl font-bold  neon-glow mb-6 tracking-wide font-poppins movie-logo">
          <span className="text-white bold">What's the </span>
          <span className="text-pink-400 bold">Verdict?</span>
        </h1>
      </a>
    </header>
  );
}
