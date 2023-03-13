import React, { useEffect, useRef } from "react";

const useOnClickOutside = ({ show, onClickOutside, component }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [onClickOutside]);

  if (!show) {
    return null;
  }

  return <div ref={ref}>{component}</div>;
};

export default useOnClickOutside;
