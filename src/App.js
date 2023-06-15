/** @format */

import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

function CounterApp() {
  // let counter = 1;
  let [counter, setCounter] = useState(1);


  let likeMeAction = () => {
    counter = counter + 1;
  console.log("I am button click", counter) ;

    setCounter(counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  );
}
export default App;
