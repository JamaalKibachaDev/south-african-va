import { React, createContext } from "react";
import { VaData } from "../assets/data";

export const VAContext = createContext();

const VAContextProvider = (props) => {
  const Values = { VaData };
  return (
    <VAContext.Provider value={Values}>{props.children}</VAContext.Provider>
  );
};

export default VAContextProvider;
