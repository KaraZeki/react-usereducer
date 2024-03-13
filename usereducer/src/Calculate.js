import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>{numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>Artır</button>
      <button onClick={() => numberContext.dispatch("decrement")}>Azalt</button>
      <button onClick={() => numberContext.dispatch("reset")}> Sıfırla</button>
    </>
  );
}

export default Calculate;
