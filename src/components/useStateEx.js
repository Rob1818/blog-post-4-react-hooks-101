import { useState } from "react";

function useStateEx() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useStateEx</h1>
      <p>My Counter: {count}!</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
    </div>
  );
}

export default useStateEx;
