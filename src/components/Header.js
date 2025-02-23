import React from "react";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="/">
        <h1 className="text-4xl font-bold  neon-glow mb-6 tracking-wide font-poppins movie-logo">
          Movie<span className="text-blue-400 bold">Meter</span> 🎬
        </h1>
      </a>
    </header>
  );
}
