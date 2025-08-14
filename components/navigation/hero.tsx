// components/Hero.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const images = [
    { src: "images/heropage1.png", alt: "Primera Imagen" },
    { src: "images/heropage2.png", alt: "Segunda Imagen" },
  ];

  const [page, setPage] = useState(0);

  const handleNext = () => setPage((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setPage((prev) => (prev - 1 + images.length) % images.length);

  const variants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={page}
          className="absolute w-full h-full"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22 }}
        >
          <Image
            src={images[page].src}
            alt={images[page].alt}
            
            fill
            className="object-cover"
          />
          
        </motion.div>
      </AnimatePresence>

      
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        ›
      </button>
    </section>
  );
}
