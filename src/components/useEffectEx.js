import { useEffect, useState } from "react";

function useEffectEx() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Hello! I am an alert box!");
  }, [count]);

  return (
    <div>
      <h1>useEffectEx</h1>
      <p> {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment count with Alert
      </button>
    </div>
  );
}

export default useEffectEx;
