'use client'

import { motion } from "framer-motion";
import { useState } from "react";


const slides = [
  {
    title: "Slide 1",
    image:
      "https://unsplash.com/pt-br/fotografias/um-homem-no-topo-de-uma-colina-verde-exuberante-lGKtfrsWUQI",
  },
  {
    title: "Slide 2",
    image:
      "https://unsplash.com/pt-br/fotografias/um-close-up-de-uma-planta-de-folhas-verdes-1Nmzdu1rq-A",
  },
  {
    title: "Slide 3",
    image:
      "https://unsplash.com/pt-br/fotografias/montanha-marrom-e-cinza-sob-o-ceu-azul-durante-o-dia-Ao1MeLnG_kY",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute left-0 top-0 h-full w-full bg-cover bg-center ${index === currentSlide ? "block" : "hidden"}`}
          style={{ backgroundImage: slide.image }}
          initial={{ y: "-100%" }}
          animate={{ y: index === currentSlide ? "0%" : "-100%" }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-3xl text-white"
            initial={{ y: "100%" }}
            animate={{ y: index === currentSlide ? "0%" : "100%" }}
            transition={{ duration: 1 }}
          >
            {slide.title}
          </motion.h1>
        </motion.div>
      ))}

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
