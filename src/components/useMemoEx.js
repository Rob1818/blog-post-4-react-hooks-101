import { useMemo } from "react";

function useMemoEx() {
  const newVariable = useMemo(() => resourceIntensiveFunction(data), [data]);
  return (
    <div>
      <h1>useMemoEx</h1>
    </div>
  );
}

export default useMemoEx;
