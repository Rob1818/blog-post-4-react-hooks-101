import React, { useContext } from "react";
import { AppContext } from "./useContextEx";

function User() {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h2>Username: {username}</h2>
    </div>
  );
}

export default User;
