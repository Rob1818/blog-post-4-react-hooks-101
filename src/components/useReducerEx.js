import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function useReducerEx() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducerEx</h1>
      <div>
        <h2>Count: {state.count}</h2>
      </div>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decrement --
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment ++
      </button>
    </div>
  );
}

export default useReducerEx;
