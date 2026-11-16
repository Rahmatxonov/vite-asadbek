import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        style={{ backgroundColor: color, width: "500px", height: "500px" }}
      ></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}
export default App;
