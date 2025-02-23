import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="/">
        <h1 className="text-4xl font-bold text-cyan-400 neon-glow mb-6 ">
          Movie<span className="text-blue-400 bold">Meter</span> 🎬
        </h1>
      </a>

      {/* <a
        href="/"
        className="flex text-sm items-center gap-2 specialBtn px-3 py-2 rounded-b-lg text-blue-400 ml-auto"
      >
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a> */}
    </header>
  );
}
