import { useState } from "react";
import "./styles.css";
import AlphabetPad from "./AlphabetPad";

export default function Keypad(props) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  const [lettersList, setLettersList] = useState(letters);
  const [iscapson, setCapsOn] = useState(false);

  const changecapsstate = () => {
    setCapsOn((prev) => !prev);
  };
  const senddata = (letter) => {
    props.OnChange(letter);

    var formedarray = generateRandomLetters();
    setLettersList(formedarray);
  };

  function generateRandomLetters() {
    var formedletters = [];

    while (letters.length > 0) {
      var singleletter = letters[Math.floor(Math.random() * letters.length)];
      formedletters.push(singleletter);
      var letterindex = letters.indexOf(singleletter);
      letters.splice(letterindex, 1);
    }
    return formedletters;
  }

  return (
    <div>
      <div id="container">
        <div className="alpha10">
          <AlphabetPad
            Senddata={senddata}
            ItemsList={lettersList.slice(0, 10)}
            Iscapson={iscapson}
          ></AlphabetPad>
        </div>
        <div className="alpha09">
          <AlphabetPad
            Senddata={senddata}
            ItemsList={lettersList.slice(10, 19)}
            Iscapson={iscapson}
          ></AlphabetPad>
        </div>
        <div className="alpha07">
          <AlphabetPad
            Senddata={senddata}
            ItemsList={lettersList.slice(19, 26)}
            Iscapson={iscapson}
          ></AlphabetPad>
        </div>

        <ul id="FunctionKeys">
          <li onClick={changecapsstate} className="delete">
            caps
          </li>
          <li onClick={props.OnBackSpace} className="backspace">
            Back Space
          </li>
        </ul>
      </div>
    </div>
  );
}
