import "./App.css";

import UseCallbackEx from "./components/useCallbackEx";
import UseContextEx from "./components/useContext/useContextEx";
import UseEffectEx from "./components/useEffectEx";
import UseMemoEx from "./components/useMemoEx";
import UseReducerEx from "./components/useReducerEx";
import UseRefEx from "./components/useRefEx";
import UseStateEx from "./components/useStateEx";
import CustomHook from "./components/customHook/customHook";

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
        <UseMemoEx></UseMemoEx>
      </div>
      <div className="box">
        <UseReducerEx></UseReducerEx>
      </div>
      <div className="box">
        <UseRefEx></UseRefEx>
      </div>
      <div className="box">
        <CustomHook></CustomHook>
      </div>
    </div>
  );
}

export default App;
