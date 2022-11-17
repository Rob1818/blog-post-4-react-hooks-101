import { useContext } from "react";
import { AppContext } from "./useContextEx";

function Log() {
  const { setName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
}

export default Log;
