"use client";

import React from "react";
import MagicButton from "./MagicButton/MagicButton";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

export default function ArrowToTop() {
  function handleArrow() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <motion.div
        className="absolute z-50  xs:bottom-[69px] xs:left-[20px] md:left-0  sm:-top-8"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: -120, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}>
        <MagicButton
          className="z-50 bg-black-100 xs:rounded-full xs:w-[50px] p-[2.5px]"
          classNameSpan="w-[50px] xs:rounded-full"
          icon={<IoIosArrowUp size={20} />}
          handleClick={handleArrow}
          titleIcon="Arrow to top"
        />
      </motion.div>
    </>
  );
}
