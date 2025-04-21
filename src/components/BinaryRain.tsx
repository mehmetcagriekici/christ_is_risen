//imports
import { MAX_DURATION } from "../utils/constants";
import { BinaryRainProps } from "../utils/types";
import { motion } from "motion/react";

/**
 * Background Component
 * Binary rain of the current translation
 */
export default function BinaryRain({ bits, binaryIndex }: BinaryRainProps) {
  //helper function to get random x position
  const getRandomX = () => Math.random() * window.innerWidth;
  //helper function to get random duration (after max duration, binary index changes)
  const getRandomDuration = () => Math.random() * MAX_DURATION + MAX_DURATION;

  //Rain drops
  //vertical movement
  const drops = bits[binaryIndex].map((bit) => ({
    bit, //string 1 || 0
    initialPosition: 0 - Math.random() * 100 - 1, //above screen
    x: getRandomX(), //random x position
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/*unmount re-mount every single binaryIndex update, re-animate*/}
      <div className="flex justify-center h-full w-full" key={binaryIndex}>
        {drops.map((drop, i) => {
          return (
            <motion.div
              key={i}
              className="flex flex-col text-yellow-100 text-sm md:text-lg"
              style={{ x: `${drop.x}%` }}
              initial={{ y: `${drop.initialPosition}%` }}
              animate={{ y: "200%" }}
              transition={{
                duration: getRandomDuration(),
                ease: "easeIn",
              }}
            >
              <motion.span
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: getRandomDuration(),
                  ease: "easeOut",
                }}
              >
                {drops[i].bit}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
