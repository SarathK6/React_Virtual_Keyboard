import { useRef, useState } from "react";
import "./styles.css";
import Keypad from "./Keypad";

export default function App() {
  const tbref = useRef("");

  const backspacehandler = () => {
    var str = tbref.current.value;
    str = str.substring(0, str.length - 1);
    tbref.current.value = str;
    return;
  };

  const updatedata = (data) => {
    if (data === "Tab") {
      tbref.current.value = tbref.current.value + " ";
      return;
    }

    tbref.current.value = tbref.current.value + data;
  };

  return (
    <div className="App">
      <h1>Random Virtual Keyboard</h1>
      <input type="textbox" ref={tbref} />
      <Keypad OnBackSpace={backspacehandler} OnChange={updatedata}></Keypad>
    </div>
  );
}
