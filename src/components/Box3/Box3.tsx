import { FC } from "react";
import { motion } from "framer-motion";

export const Box3: FC = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        drag
        dragConstraints={{
          right: 30,
          left: 20,
          top: -5,
          bottom: 20
        }}
      ></motion.div>
    </div>
  );
};
