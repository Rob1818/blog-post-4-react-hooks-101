import "./App.css";
import UseCallbackEx from "./components/useCallbackEx";
import UseContextEx from "./components/useContextEx";
import UseEffectEx from "./components/useEffectEx";
import UseImperativeHandleEx from "./components/useImperativeHandleEx";
import UseLayoutEffectEx from "./components/useLayoutEffectEx";
import UseMemoEx from "./components/useMemoEx";
import UseReducerEx from "./components/useReducerEx";
import UseRefEx from "./components/useRefEx";
import UseStateEx from "./components/useStateEx";

function App() {
  return (
    <div className="App">
      <div className="box">
        <UseCallbackEx></UseCallbackEx>
      </div>
      <div className="box">
        <UseContextEx></UseContextEx>
      </div>
      <div className="box">
        <UseEffectEx></UseEffectEx>
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
      <div className="box">
        <UseStateEx></UseStateEx>
      </div>
    </div>
  );
}

export default App;
