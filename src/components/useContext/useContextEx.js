import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function useContextEx() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1>useContext</h1>
      <User /> <Login />
    </AppContext.Provider>
  );
}

export default useContextEx;
