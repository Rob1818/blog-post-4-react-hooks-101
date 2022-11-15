import "./App.css";

import UseCallbackEx from "./components/useCallbackEx";
import UseContextEx from "./components/useContext/useContextEx";
import UseEffectEx from "./components/useEffectEx";
import UseImperativeHandleEx from "./components/useImperativeHandleEx";
import UseLayoutEffectEx from "./components/useLayoutEffectEx";
import UseMemoEx from "./components/useMemoEx";
import UseReducerEx from "./components/useReducerEx";
import UseRefEx from "./components/useRefEx";
import UseStateEx from "./components/useStateEx";

function App() {
  const theme = { background: "red" };
  return (
    <div className="App">
      <h2>Basic Hooks</h2>
      <div className="box">
        <UseStateEx></UseStateEx>
      </div>
      <div className="box">
        <UseEffectEx></UseEffectEx>
      </div>
      <div className="box">
        <UseContextEx></UseContextEx>
      </div>
      <h2>Other Hooks</h2>
      <div className="box">
        <UseCallbackEx></UseCallbackEx>
      </div>

      <div className="box">
        <UseImperativeHandleEx></UseImperativeHandleEx>
      </div>
      <div className="box">
        <UseLayoutEffectEx></UseLayoutEffectEx>
      </div>
      <div className="box">
        <UseMemoEx></UseMemoEx>
      </div>
      <div className="box">
        <UseReducerEx></UseReducerEx>
      </div>
      <div className="box">
        <UseRefEx></UseRefEx>
      </div>
    </div>
  );
}

export default App;
