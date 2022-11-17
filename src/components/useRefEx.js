import { useRef, useState } from "react";

function useRefEx() {
  const inputRef = useRef(null);

  const [name, setName] = useState("john");

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="name" ref={inputRef} />
      <button onClick={() => setName(inputRef.current.value)}>
        Change Name
      </button>
    </div>
  );
}

export default useRefEx;
