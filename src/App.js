import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  function handleClick(){
    setResult("")
  }

  async function setNumber(e){
    setResult(result.concat(e.target.name))
  }
  function backspace(){
    setResult(result.slice(0,-1))
  }

  function percentage(e){
    // eslint-disable-next-line
    setResult(eval(result)*100)
  }

function evaluate(){
  try{
    // eslint-disable-next-line
    setResult(eval(result));
  }catch(err){
    setResult("error")
  }
}
  return (
    <main>
      <div className="container">
        <form action="">
          <input type="text" value={result} readOnly placeholder="0" />
        </form>
        <div className="keypads">
          <button className="controls" onClick={handleClick}>AC</button>
          <button className="controls" onClick={backspace}>C</button>
          <button className="controls" onClick={percentage}>%</button>
          <button className="yellow" onClick={setNumber} name="/">÷</button>
          <button onClick={setNumber} name="7">7</button>
          <button onClick={setNumber} name="8">8</button>
          <button onClick={setNumber} name="9">9</button>
          <button className="yellow" onClick={setNumber} name="*">x</button>
          <button onClick={setNumber} name="4">4</button>
          <button onClick={setNumber} name="5">5</button>
          <button onClick={setNumber} name="6">6</button>
          <button className="yellow" onClick={setNumber} name="-">-</button>
          <button onClick={setNumber} name="1">1</button>
          <button onClick={setNumber} name="2">2</button>
          <button onClick={setNumber} name="3">3</button>
          <button className="yellow" onClick={setNumber} name="+">+</button>
          <button className="zero" onClick={setNumber} name="0">0</button>
          <button onClick={setNumber} name=".">.</button>
          <button className="yellow" onClick={evaluate}>=</button>
        </div>
      </div>
    </main>
  );
}

export default App;
