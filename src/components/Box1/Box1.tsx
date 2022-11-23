import { FC } from "react";
import { motion } from "framer-motion";

export const Box1: FC = () => {
  return (
    <motion.div
      className="box-container"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, backgroundColor: "aquamarine" }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "tween" }}
      >
        hello, Framer Motion!
      </motion.h1>
    </motion.div>
  );
};
