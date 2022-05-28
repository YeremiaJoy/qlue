import { useState } from "react";
import { createContext } from "react";

//context to store data
export const dataMaster = createContext();

export default function Context({ children }) {
  const [data, setData] = useState([]);

  return (
    <dataMaster.Provider value={{ data, setData }}>
      {children}
    </dataMaster.Provider>
  );
}
