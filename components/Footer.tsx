"use client";

import React from "react";
import MagicButton from "@/components/ui/MagicButton/MagicButton";
import { socialMedia } from "@/data";
import { motion } from "framer-motion";
import ArrowToTop from "./ui/ArrowToTop";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="md:w-full">
        <div className="flex flex-col items-center w-full relative z-50 ">
          <p className="capitalize text-white-200 xs:w-96 text-center mt-10 xs:px-7 md:px-0">
            Reach out to me today and let&#39;s discuss how I can help you
            achieve your goals.
          </p>

          <Link
            href="mailto:kyrillossamy@outlook.com"
            title="Send an email to kyrillossamy@outlook.com"
            className="">
            <MagicButton
              title="Let&#39;s Get In Touch!"
              classNameIcon="ml-2"
              icon={<FaEnvelope size={15} />}
            />
          </Link>

          <div className="sm:relative mb-6 flex mt-16 sm:flex-row xs:flex-col-reverse justify-around  xs:gap-[20px] sm:gap-[132px] md:gap-[310px] lg:gap-[550px] xl:gap-[730px] items-center">
            <p className="md:text-base xxs:text-sm md:font-normal xxs:font-light xs:mt-5">
              {new Date().getFullYear()} &copy;{" "}
              <Link
                href="https://www.linkedin.com/in/kyrillos-samy-38b110222"
                className="underline w-fit underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Kyrillos Samy's LinkedIn profile">
                Kyrillos Samy
              </Link>
            </p>

            <ArrowToTop />

            <div className="items-center xxs:gap-6 md:gap-8 flex z-50">
              {socialMedia.map(({ id, img, link, title }) => (
                <motion.a
                  key={id}
                  href={link}
                  title={title}
                  target="_blank"
                  className="shadow-button w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}>
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
      </footer>
    </>
  );
}
