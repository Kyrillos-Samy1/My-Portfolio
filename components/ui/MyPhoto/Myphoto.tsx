"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import linkedinImage from "@/assets/Kyrillos Samy - LinkedIn.png";
import "@/components/ui/MyPhoto/MyPhoto.css";

function MyPhoto() {
  return (
    <div>
      <motion.div
        className="box2 relative focus:outline-0"
        drag
        dragConstraints={{ left: -20, right: 20, top: 0, bottom: 16 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}>
        <motion.div
          key="me-div"
          initial={{ rotate: 0, opacity: 0, y: 0, scale: 0.7 }}
          animate={{
            rotate: 360,
            opacity: 1,
            y: [5, -5, 5, -5],
            scale: 1
          }}
          exit={{ rotate: 0, opacity: 0, y: 0, scale: 0.5 }}
          transition={{
            duration: 2,
            ease: "easeIn",
            type: "spring",
            stiffness: 70,
            damping: 6,
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            },
            scale: {
              duration: 2.5,
              ease: "linear"
            }
          }}
          whileTap={{
            opacity: 0.5,
            transition: { duration: 0.8 }
          }}
          style={{ transformOrigin: "center" }}
          className="box shadow-box absolute top-[12.5px] left-[12.5px] focus:outline-0">
          <a
            href="https://www.linkedin.com/in/kyrillos-samy-38b110222"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Kyrillos Samy's LinkedIn profile">
            <Image
              src={linkedinImage}
              alt="Kyrillos Samy's Photo"
              width={400}
              height={400}
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyPhoto;
