import { useEffect, useRef, useState } from "react";

export const useSlider = (list, interval) => {
  let [count, setCount] = useState(0);
  let [index, setIndex] = useState(0);
  const myRef = useRef(null);
  const indexRef = useRef(null);

  myRef.current = () => {
    setCount(count + 1);
  };
  indexRef.current = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    let id = setInterval(() => {
      myRef.current();
    }, interval);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    indexRef.current();
    if (list.length - 1 === index) {
      setIndex(0);
    }
  }, [count]);

  return { index, count };
};
