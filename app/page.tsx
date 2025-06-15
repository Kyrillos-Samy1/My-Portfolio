"use client";

import { Grid } from "@/components/Grid";
import PortfolioComponent from "@/components/Portfolio";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { motion } from "framer-motion";
import "@/components/ui/MagicButton/MagicButton.css";
import RecentProjectsComponent from "@/components/RecentProjectsComponent";
import Testimonials from "@/components/Testimonials";
import Experiance from "@/components/Experiance";
import Footer from "@/components/Footer";
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <header
        id="home"
        className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 xs:h-[745px] md:h-screen">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            className="fixed top-0 left-0 w-full z-[100]">
            <FloatingNav navItems={navItems} />
          </motion.div>
          <PortfolioComponent />
        </div>
      </header>

      <section
        id="about-me"
        className="relative bg-black-100 border-t-2 border-t-gray-500 overflow-hidden mx-auto px-[22px] sm:px-10 xs:py-12 md:py-16 md:px-5 flex justify-center items-center flex-col">
        <div className="select-none pointer-events-none xl:w-[97%] lg:w-[108%] md:w-[130%] xs:w-[240%]  absolute xs:-left-44 sm:-left-96 xs:right-0 md:-left-20 lg:-left-0  xs:-top-[250px] md:-top-[320px] lg:-top-[530px] xl:-top-[685px] min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={400}
            height={300}
            className="w-full h-full opacity-50"
            draggable="false"
            unoptimized={false}
          />
        </div>
        <h2 className="shadow-button z-50 bg-black-100 tracking-widest border-b-2 xs:text-xl md:text-3xl lg:text-4xl xs:mb-10 md:mb-12 p-2 pb-1 rounded-lg">
          About Me
        </h2>
        <Grid />
      </section>

      <section
        id="recent-projects"
        className="bg-black-100 border-t-2 h-full border-t-gray-500 overflow-hidden mx-auto sm:px-10 md:px-5 py-16 md:pb-[84px] xs:pb-[65px] flex justify-center items-center flex-col">
        <h2 className="shadow-button z-50  bg-transparent tracking-widest border-b-2 xs:text-xl md:text-3xl lg:text-4xl xs:mb-6 md:mb-12 p-2 pb-1 rounded-lg text-center">
          A Small Selection of <br />{" "}
          <span className="text-sky-400">Recent Projects</span>
        </h2>
        <RecentProjectsComponent />
      </section>

      <section
        id="experiance"
        className="bg-black-100 border-t-2 border-t-gray-500 overflow-hidden mx-auto sm:px-10 md:px-5 py-16 md:pb-[70px] xs:pb-[50px] flex justify-center items-center flex-col">
        <h2 className="shadow-button z-50 bg-transparent tracking-widest border-b-2 xs:text-xl md:text-3xl lg:text-4xl mb-14 p-2 pb-1 rounded-lg text-center">
          My <span className="text-sky-400">Work Experiance</span>
        </h2>

        <Experiance />
      </section>

      <section
        id="testimonials"
        className=" bg-black-100 border-t-2 border-t-gray-500 overflow-hidden mx-auto sm:px-10 md:px-5 py-16 md:pb-[54px] xs:pb-[50px] flex justify-center items-center flex-col">
        <h2 className="shadow-button z-50  bg-transparent tracking-widest border-b-2 xs:text-xl md:text-3xl lg:text-4xl xs:mb-10 md:mb-4  p-2 pb-1 rounded-lg text-center">
          Words from <br />{" "}
          <span className="text-sky-400">Industry Colleagues</span>
        </h2>

        <Testimonials />
      </section>

      <section
        id="contact"
        className="w-full relative bg-black-100 border-t-2 border-t-gray-500 overflow-hidden mx-auto xs:px-7 sm:px-10 md:px-5 py-16 md:pb-[74px] xs:pb-[40px] flex justify-center items-center flex-col">
        <h2 className="shadow-button xs:-ml-2 md:ml-0 z-50 bg-black-100 tracking-widest border-b-2 xs:text-xl md:text-3xl lg:text-4xl px-5 md:mb-5 p-2 pb-1 rounded-lg text-center md:w-fit xs:w-[88%]">
          Ready To Take <span className="text-sky-400">Your Digital</span>{" "}
          Presence <br /> To The Next Level?
        </h2>

        <Footer />
      </section>
    </>
  );
}
