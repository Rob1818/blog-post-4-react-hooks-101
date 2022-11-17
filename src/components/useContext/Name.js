import { useContext } from "react";
import { AppContext } from "./useContextEx";

function Name() {
  const { name } = useContext(AppContext);

  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
}

export default Name;
