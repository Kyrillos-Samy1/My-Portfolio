"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const words = [
  "a Junior Level",
  "a React.js Developer",
  "a Problem Solver",
  "a Success Chaser"
];

export default function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const maxWordLength = Math.max(...words.map((w) => w.length));

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 100;

    const updateWord = () => {
      setWord((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      if (!isDeleting && word === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && word === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(updateWord, speed);
    return () => clearTimeout(timeout);
  }, [word, isDeleting, index]);

  return (
    <div className="flex flex-col justify-center items-center tracking-wider">
      <h1 className="text-white xs:ml-[-14px] sm:ml-[53px] md:-ml-[30px] lg:ml-[-37px]">
        <TextGenerateEffect
          words="Explore My Portfolio!"
          className=" xs:text-[30px] sm:text-[43px] md:text-[43px] lg:text-[55px] tracking-wider leading-10"
        />
      </h1>

      <h2 className="text-white xs:ml-[-64px] sm:ml-[-23px] md:-ml-[79] lg:-ml-[115px]">
        <TextGenerateEffect
          words="My name is Kyrillos Samy"
          className="xs:text-[21px] sm:text-[30px] md:text-[35px] lg:text-[40px] tracking-wider"
        />

        <div className="flex justify-center items-center xs:-ml-[5px] sm:-ml-[16px] md:-ml-[30px] lg:-ml-[25px] xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
          <h2 className="text-white">
            <TextGenerateEffect
              words="I&#39;m"
              className=" xs:text-[19.7px] sm:text-[28.5px] md:text-[33px] lg:text-[38.5px] text-white-100"
            />
          </h2>

          <motion.span
            key={words[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-semibold leading-10 xs:ml-[8px] xs:mt-5 sm:mt-4 inline-block text-white-100 tracking-wider xs:text-[19.7px] sm:text-[28.5px] md:text-[33px] lg:text-[38.5px]"
            style={{ minWidth: `${maxWordLength + 1}ch` }}>
            {word}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse"
              }}
              className="text-white font-normal leading-10">
              {" "}
              |
            </motion.span>
          </motion.span>
        </div>
      </h2>
    </div>
  );
}
