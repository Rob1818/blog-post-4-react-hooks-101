import React, { useState, createContext } from "react";
import Log from "./Log";
import Name from "./Name";

export const AppContext = createContext(null);

function useContextEx() {
  const [name, setName] = useState("");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <h1>useContext</h1>
      <Name /> <Log />
    </AppContext.Provider>
  );
}

export default useContextEx;
