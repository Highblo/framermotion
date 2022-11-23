import { FC, useState } from "react";
import { motion } from "framer-motion";

export const Box2: FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const rotateBox = (): void => {
    setIsAnimating(!isAnimating);
  };

  return (
    <motion.div
      className="box"
      animate={{
        opacity: isAnimating ? 1 : 0.5,
        x: isAnimating ? 800 : 0,
        rotate: isAnimating ? 360 : 0,
      }}
      transition={{ type: "spring", stiffness: 60 }}
      onClick={rotateBox}
    >
      回ります
    </motion.div>
  );
};
