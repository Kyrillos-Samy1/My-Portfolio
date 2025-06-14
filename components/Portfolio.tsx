"use client";

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight-new";
import GridUI from "@/components/ui/GridUI";
import TypingEffect from "./ui/TypingEffect";
import MyPhoto from "@/components/ui/MyPhoto/Myphoto";
import { motion } from "framer-motion";
import MagicButton from "@/components/ui/MagicButton/MagicButton";
import { MdOutlineCloudDownload } from "react-icons/md";
import { socialMedia } from "@/data";
import Image from 'next/image';

function PortfolioComponent() {
  const handleDownload = () => {
    window.open("https://cv.pdf", "_blank");
  };

  return (
    <>
      <div className="xs:pt-36 pt-44  xs:pb-0 md:pb-20 ">
        <div className="relative">
          {/* Spotlight 1 - Top Left */}
          <Spotlight className="absolute top-[-40px] left-[-200px] xs:top-[-350px] xs:left-[-150px] z-[10] w-[100vw] h-[10vh] opacity-5 sm:opacity-[2%] xs:opacity-[0.5%]" />

          {/* Spotlight 2 - Top Right */}
          <Spotlight className="absolute top-[10px] left-[170%] xs:top-[5px] xs:left-[150%] z-[10] w-[100vw] h-[5vh] opacity-5 sm:opacity-2 xs:opacity-[0.5%]" />
        </div>

        <div className="absolute top-0 left-0 h-full w-full">
          <GridUI />
        </div>

        <div className="flex flex-row items-center justify-center">
          <motion.div
            className="relative my-20 z-10 flex flex-col justify-center xs:w-full"
            initial={{ opacity: 0.1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}>
            <TypingEffect />
            <div className="mx-auto w-[388px] mt-4">
              <div className="block">
                <MagicButton
                  classNameIcon="ml-2"
                  title={"Download My CV"}
                  icon={<MdOutlineCloudDownload />}
                  handleClick={handleDownload}
                />
                <div className="flex flex-row mt-10 gap-12 md:-translate-x-[10%]">
                  {socialMedia.map(({ id, img, link, title }) => (
                    <motion.a
                      key={id}
                      href={link}
                      title={title}
                      target="_blank"
                      className="shadow-button xxs:mb-9 md:mb-0 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-full"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: [0, 10], opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        delay: id * 0.5,
                        duration: 0.8,
                        scale: 0.3,
                        y: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 3 + id * 0.1,
                          duration: 0.6
                        }
                      }}>
                      <Image
                        src={img}
                        alt="Social Media Icon"
                        width={20}
                        height={20}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 w-1/2 h-1/2 xs:hidden xl:block"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}>
            <MyPhoto />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default PortfolioComponent;
