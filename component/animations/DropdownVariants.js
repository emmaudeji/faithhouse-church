export const dropdownVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeOut",
    },
  },
};
