import { FC } from "react";
import { motion } from "framer-motion";

export const Box5: FC = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren"
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      }
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="boxflex"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => (
          <motion.li
            className="boxItem"
            key={box}
            variants={listVariant}
          ></motion.li>
        ))}
      </motion.div>
    </div>
  );
};
