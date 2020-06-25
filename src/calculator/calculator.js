import React from "react";
import { useState } from "react";
import "../calculator/calculator.css";

let Calculator = () => {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [sign, setsign] = useState("");
  const [ans, setans] = useState("");
  const [hold, sethold] = useState("");
  console.log("hold", hold);
  console.log("first", first);
  console.log("second", second);
  console.log("ans", ans);

  let operation = (a, b) => {
    switch (sign) {
      case "+":
        setans(parseFloat(a) + parseFloat(b));
        break;
      case "-":
        setans(parseFloat(a) - parseFloat(b));
        break;
      case "*":
        setans(parseFloat(a) * parseFloat(b));
        break;
      case "/":
        setans(parseFloat(a) / parseFloat(b));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="m-3">
        <input
          type="number"
          onChange={(e) => {
            sethold(e.target.value);
          }}
          placeholder="type number"
          value={hold}
        />
      </div>
      <div className="m-3">
        <button
          onClick={() => {
            setans("");
            if (!first) {
              setfirst(hold);
              sethold("");
            } else if (first && !second) {
              setsecond(hold);
              operation(first, hold);
            } else if (first && second) {
              setfirst(parseFloat(first) + parseFloat(second));
              setsecond("");
            }

            sethold("");
            setsign("+");
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setans("");
            if (!first) {
              setfirst(hold);
              sethold("");
            } else if (first && !second) {
              setsecond(hold);
              operation(first, hold);
            } else if (first && second) {
              setfirst(parseFloat(first) - parseFloat(second));
              setsecond("");
            }

            sethold("");
            setsign("-");
          }}
        >
          subtract
        </button>
        <button
          onClick={() => {
            setans("");
            if (!first) {
              setfirst(hold);
              sethold("");
            } else if (first && !second) {
              setsecond(hold);
              operation(first, hold);
            } else if (first && second) {
              setfirst(parseFloat(first) * parseFloat(second));
              setsecond("");
            }

            sethold("");
            setsign("*");
          }}
        >
          multiply
        </button>
      </div>
      <div className="m-3">
        <button
          onClick={() => {
            setans("");
            if (!first) {
              setfirst(hold);
              sethold("");
            } else if (first && !second) {
              setsecond(hold);
              operation(first, hold);
            } else if (first && second) {
              setfirst(parseFloat(first) / parseFloat(second));
              setsecond("");
            }

            sethold("");
            setsign("/");
          }}
        >
          divide
        </button>
        <button
          onClick={() => {
            if (first && second) {
              operation(first, second);
            } else if (first && hold) {
              setsecond(hold);
              operation(first, hold);
            }
          }}
        >
          equal
        </button>
        <button>cancle</button>
      </div>
      <div>
        {first} {sign} {second} {ans ? `= ${ans}` : ""}
      </div>
    </div>
  );
};
export default Calculator;
