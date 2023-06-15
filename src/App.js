/** @format */

import { useState } from "react";

function App() {
  return (
    <>
      <h1>String Case</h1>
      <CapLow />
    </>
  );
}

function CapLow() {
  let [title, setCounter] = useState("Hellow world");

  let LowerCaseAction = () => {
    title = title.toLowerCase();

    console.log(title);

    setCounter(title);
  };

  let UpperCaseAction = () => {
    title = title.toUpperCase();

    console.log(title);

    setCounter(title);
  };
  return (
    <>
      <h1>{title}</h1>
      <input type="button" value="Uppercase" onClick={UpperCaseAction} />
      <input type="button" value="Lowercase" onClick={LowerCaseAction} />
    </>
  );
}
export default App;
