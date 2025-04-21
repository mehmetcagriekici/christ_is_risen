//imports
import { MAX_DURATION } from "../utils/constants";
import { TranslationPresentationProps } from "../utils/types";
import { motion } from "motion/react";

export default function TranslationPresentation({
  lines,
  lineIndex,
}: TranslationPresentationProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <motion.div
        key={lines[lineIndex]} // animate when line changes
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: MAX_DURATION, ease: "easeOut" }}
        className="text-yellow-50 text-3xl md:text-5xl font-garamond tracking-wider font-bold text-center drop-shadow-lg"
      >
        {lines[lineIndex]}
      </motion.div>
    </div>
  );
}
