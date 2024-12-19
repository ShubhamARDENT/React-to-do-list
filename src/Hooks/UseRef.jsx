import React, { useRef } from "react";
const UseRef = () => {
  const inputElment = useRef();

  const handleFocus = () => {
    inputElment.current.focus();
  };
  return (
    <div>
      <input ref={inputElment} type="text" />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
};

export default UseRef;
