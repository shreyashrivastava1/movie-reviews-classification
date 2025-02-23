import React from "react";

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50 animate-gradient" />

      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-500 blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-500 blur-3xl opacity-30 animate-float" />
    </div>
  );
}
