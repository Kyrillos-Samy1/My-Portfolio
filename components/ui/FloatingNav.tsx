"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaFolderOpen } from "react-icons/fa";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = scrollY.getPrevious() || 0;

      if (currentScrollY < 110 || currentScrollY < previousScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, setVisible, scrollY]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit top-10 fixed inset-x-0 mx-auto border border-neutral-200 dark:border-white/[0.2] rounded-full backdrop-blur-lg z-[5000] pr-4 pl-4 py-2 items-center justify-center md:space-x-6 xs:space-x-[8.5px]",
          className
        )}>
        {navItems
          .slice(0, Math.ceil(navItems.length / 2))
          .map((navItem, idx) => (
            <Link
              key={`link-left-${idx}`}
              href={navItem.link}
              className="flex-col relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
              <span className="block sm:hidden text-sm mb-1">
                {navItem.icon}
              </span>
              <span className="block xs:text-[10px] tracking-wider md:text-sm">
                {navItem.name}
              </span>
            </Link>
          ))}

        <Link
          href="#recent-projects"
          type="button"
          className="flex-col border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white dark:hover:text-neutral-300 px-4 py-2 rounded-full flex items-center">
          <span className="block sm:hidden text-sm">
            <FaFolderOpen />
          </span>
          <span className="block xs:text-[10px] tracking-wider">Projects</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>

        {navItems.slice(Math.ceil(navItems.length / 2)).map((navItem, idx) => (
          <Link
            key={`link-right-${idx}`}
            href={navItem.link}
            className="flex-col relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
            <span className="block sm:hidden text-sm mb-1">{navItem.icon}</span>
            <span className="block sm:block md:text-sm xs:text-[10px] tracking-wider">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </>
  );
};
