import { FC } from "react";
import { motion } from "framer-motion";

export const Box4: FC = () => {
  const boxVariant = {
    lion: {
      x: 100,
      scale: 1.5,
    },
    elephant: {
      x: 800,
      scale: 0.3,
      transition: {
        duration: 0.8
      }
    }
  }
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="lion"
        animate="elephant"
      >
      </motion.div>
    </div>
  );
};
