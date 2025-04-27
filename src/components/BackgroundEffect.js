import React, { useEffect, useState } from "react";

export default function BackgroundEffect() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const randomColors = [
      "#1B263B", // Deep Navy (Background Depth)
      "#415A77", // Steel Blue (Soft Accents)
      "#778DA9", // Muted Blue (Subtle Highlights)
      "#E63946", // Cinematic Red (Highlight)
      "#F4A261", // Warm Gold (Contrast Accent)
      "#A8DADC", // Soft Cyan (Light Glow)
      "#264653", // Deep Teal (Dark Mode Balance)
      "#2A9D8F", // Muted Emerald (For Soft Contrast)
      "#E9C46A", // Cinematic Warm Yellow
      "#8D99AE", // Slate Grey (Sophisticated Neutral)
    ];

    const presetPositions = [
      { top: "10%", left: "15%" },
      { top: "20%", left: "75%" },
      { top: "40%", left: "50%" },
      { top: "60%", left: "30%" },
      { top: "80%", left: "85%" },
      { top: "85%", left: "10%" },
      { top: "30%", left: "90%" },
      { top: "50%", left: "20%" },
      { top: "75%", left: "60%" },
      { top: "90%", left: "40%" },
    ];

    const newParticles = presetPositions.map((pos, i) => ({
      id: i,
      size: Math.random() * 30 + 50,
      top: pos.top,
      left: pos.left,
      animationDuration: Math.random() * 5 + 3 + "s",
      color: randomColors[Math.floor(Math.random() * randomColors.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black via-gray-900 to-black opacity-80"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-60 animate-gradient" /> */}
      <div className="background-glow"></div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-90 animate-float"
          style={{
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            animationDuration: p.animationDuration,
            filter: "blur(10px)",
            boxShadow: `0 0 30px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

//
