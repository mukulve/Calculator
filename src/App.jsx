import { useState } from "react";
import { create, all } from "mathjs";
import "./index.css";

function App() {
  var [equation, setequation] = useState("");
  var [history, sethistory] = useState("");

  function calculate() {
    history = "";
    const config = {};
    const math = create(all, config);
    //console.log("equation: " + equation);
    var answer = math.evaluate(equation);
    //console.log("answer: " + answer);
    sethistory(history + equation + " = ");
    setequation(answer);
  }

  function clear() {
    setequation("");
    sethistory("");
  }

  return (
    <div className="App">
      <div className="calculator_answer">
        <i> {history} </i>
        <p> {equation} </p>
      </div>
      <div className="calculator_buttons">
        <button onClick={() => setequation((equation += "("))}>(</button>
        <button onClick={() => setequation((equation += ")"))}>)</button>
        <button onClick={() => setequation((equation += "%"))}>%</button>
        <button onClick={clear}>C</button>

        <button onClick={() => setequation((equation += 7))}>7</button>
        <button onClick={() => setequation((equation += 8))}>8</button>
        <button onClick={() => setequation((equation += 9))}>9</button>
        <button onClick={() => setequation((equation += "/"))}>÷</button>

        <button onClick={() => setequation((equation += 4))}>4</button>
        <button onClick={() => setequation((equation += 5))}>5</button>
        <button onClick={() => setequation((equation += 6))}>6</button>
        <button onClick={() => setequation((equation += "*"))}>x</button>

        <button onClick={() => setequation((equation += 1))}>1</button>
        <button onClick={() => setequation((equation += 2))}>2</button>
        <button onClick={() => setequation((equation += 3))}>3</button>
        <button onClick={() => setequation((equation += "-"))}>-</button>

        <button onClick={() => setequation((equation += 0))}>0</button>
        <button onClick={() => setequation((equation += "."))}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => setequation((equation += "+"))}>+</button>
      </div>
    </div>
  );
}

export default App;
