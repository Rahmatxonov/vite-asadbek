import React, { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [text, setText] = useState(null);
  const refValue = useRef();

  function handleClick() {
    setText(refValue.current.value);
  }

  return (
    <div>
      <input
        className="m-5 border border-blue-500 border-[3px] rounded-xl p-2 outline-0"
        type="text"
        ref={refValue}
        placeholder="enter your name..."
      />
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer"
      >
        Click me
      </button>

      <p>{text}</p>
    </div>
  );
};

export default App;
