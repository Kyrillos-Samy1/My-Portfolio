"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../../../lib/utils";
import { BackgroundGradientAnimation } from "../BgGradient";
import { GridGlobe } from "@/components/ui/GridGlobe";
import { motion } from "framer-motion";
import MagicButton from "../MagicButton/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

import dynamic from "next/dynamic";

const LottieConfetti = dynamic(() => import("../LottieConfetti"), {
  ssr: false
});

export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className: string;
  title: string;
  description: string;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("kyrillossamy@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between relative overflow-hidden space-y-4 rounded-3xl border border-white/[0.1] transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 7%, rgba(18,18,119,1) 56%, rgba(0,212,255,1) 100%)"
      }}>
      <div className={`${id === 4 && "flex justify-center items-center"}`}>
        <div className="w-full h-full absolute object-cover object-center">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "absolute right-0 bottom-0 md:w-96 w-60"
              )}
              fill
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "h-full w-full opacity-80"
          }`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              fill
            />
          )}
        </div>
        {id === 4 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
          <div className="text-sm font-extralight text-[#c1c2d3] md:text-xs z-10">
            {description}
          </div>
          <div className="font-bold text-lg lg:text-3xl max-w-96 z-20 tracking-wider">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-full rounded-xl overflow-hidden">
              <div className="md:w-1/2 text-center md:text-left relative md:-top-60 lg:-top-64 xl:-top-28">
                <p className="text-sm sm:text-base opacity-75 tracking-wider">
                  I constantly try to improve
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-2xl xl:text-4xl font-bold leading-tight xxs:mb-3 md:mb-0">
                  My tech stack!
                </h2>
              </div>

              <div className="relative h-full w-full sm:w-56 lg:w-64 overflow-hidden">
                <motion.div
                  initial={{ y: "107%" }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  className="grid xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xs:gap-3">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Redux",
                    "React Query",
                    "Context API",
                    "Formik",
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Styled Components",
                    "Framer Motion",
                    "Tailwind",
                    "Git",
                    "GitHub",
                    "Vercel"
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="py-2 px-5 rounded-lg text-center bg-[#10132E] text-white"
                      style={{
                        fontSize: "clamp(10px, 1.2vw, 14px)",
                        minWidth: "90px",
                        maxWidth: "105%",
                        overflow: "hidden",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        letterSpacing: "1.5px"
                      }}>
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="mt-5 relative ">
              <div className={`absolute -bottom-5 right-0`}>
                <LottieConfetti copied={copied} />
              </div>
              <MagicButton
                title={copied ? "Email Copied!" : "Copy My Email"}
                icon={<IoCopyOutline />}
                handleClick={handleClick}
                classNameIcon="ml-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
