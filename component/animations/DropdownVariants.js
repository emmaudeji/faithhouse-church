export const dropdownVariants = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};
