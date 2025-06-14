"use client"
import "@/components/ui/MagicButton/MagicButton.css";
import { motion } from "framer-motion";

interface MagicButtonProps {
  title?: string;
  titleIcon?: string;
  icon?: React.ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  classNameSpan?: string;
  classNameIcon?: string;
  children?: React.ReactNode;
}

const MagicButton = ({
  title,
  titleIcon,
  icon,
  handleClick,
  className,
  classNameSpan,
  classNameIcon
}: MagicButtonProps) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.95, opacity: 0.6 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 6,
          duration: 1.5
        }}
        title={title || titleIcon}
        aria-label={title}
        onClick={handleClick}
        type="button"
        className={`${className} shadow-button tracking-wider relative inline-flex xxs:mt-10 lg:mt-10 xs:h-12 xs:w-[220px] overflow-hidden rounded-lg p-[1.8px] focus:outline-none ${
          title === "Email Copied!" || title === "Copy My Email"
            ? "md:w-[100%] lg:w-[220px]"
            : ""
        }`}>
        <span
          className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] `}
        />
        <span
          className={`${classNameSpan} z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm ${
            title === "Email Copied!" || title === "Copy My Email"
              ? "md:w-[100%] lg:w-full"
              : ""
          }`}>
          {title} <span className={`${classNameIcon} text-xl`}>{icon}</span>
        </span>
      </motion.button>
    </>
  );
};

export default MagicButton;
