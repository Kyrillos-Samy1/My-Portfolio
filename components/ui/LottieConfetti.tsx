"use client";

import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

const LottieConfetti = ({ copied }: { copied: boolean }) => {
  return (
    <Lottie
      loop={copied}
      autoplay={copied}
      animationData={animationData}
      rendererSettings={{ preserveAspectRatio: "xMidYmid slice" }}
      style={{ width: 150, height: 150 }}
    />
  );
};

export default LottieConfetti;
