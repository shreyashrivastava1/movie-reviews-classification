import React, { useEffect, useState } from "react";

export default function BE_3() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 700 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.2 + 0.1,
    }));

    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full twinkle-effect drifting-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            opacity: 0.08,
            "--random-delay": Math.random() * 8,
            "--random-speed": Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
