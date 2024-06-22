"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

//import "tailwindcss/tailwind.css";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const cards = [
  {
    name: "Serhiy Hipskyy",
    profession: "CEO Universal",
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    avatar: "/avatar1.jpg",
    star: "/Shape.png",
  },
  {
    name: "Sara Mendez",
    profession: "CEO Eronaman",
    description:
      "Curabitur tincidunt nisi at est ornare, nec tincidunt risus tincidunt. Vestibulum hendrerit at purus sed luctus. Integer eu viverra magna. Cras elementum libero a ultrices rutrum.",
    avatar: "/avatar2.jpg",
    star: "/Shape.png",
  },
  {
    name: "Jane Kent",
    profession: "CEO Sony",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    avatar: "/avatar3.jpg",
    star: "/Shape.png",
  },
];

export default function CardCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const cardIndex = wrap(0, cards.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-80"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Image
                  src={cards[cardIndex].star}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <p>{cards[cardIndex].description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-center gap-6">
              <Image
                src={cards[cardIndex].avatar}
                alt="avatar"
                width={350}
                height={350}
                className="h-20 w-20 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{cards[cardIndex].name}</span>
                <span className="text-gray-400 text-xs">{cards[cardIndex].profession}</span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-14 flex items-center justify-center gap-x-8">
        <button className="rounded p-2 text-primary" onClick={() => paginate(-1)}>
          <CircleArrowLeft />
        </button>
        <button className="rounded p-2 text-primary" onClick={() => paginate(1)}>
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
}
