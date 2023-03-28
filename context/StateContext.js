import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

const Context = createContext();

const StateContext = ({ children }) => {
  const [devotional, setDevotional] = useState("");

  return (
    <Context.Provider value={{ setDevotional }}>{children}</Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
