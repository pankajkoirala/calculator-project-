import React, { useState } from "react";
import "./calculator.css";

let RemakeCalculator = () => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [H, setH] = useState("");
  const [S, setS] = useState("");
  console.log("A", A);
  console.log("b", B);
  console.log("C", C);
  console.log("H", H);
  console.log("S", S);

  let operation = (a, b) => {
    switch (S) {
      case "+":
        setC(parseFloat(a) + parseFloat(b));

        break;
      case "-":
        setC(parseFloat(a) - parseFloat(b));

        break;
      case "*":
        setC(parseFloat(a) * parseFloat(b));

        break;
      case "/":
        setC(parseFloat(a) / parseFloat(b));

        break;

      default:
        break;
    }
  };

  return (
    <div className="container bg-danger ">
      <div className=" d-flex justify-content-center">
        <input
          className="m-4 dp  "
          type="number"
          placeholder="type number"
          onChange={(e) => {
            if (A && B && C) {
              setB("");
              setA("");
              setC("");
              setS("");
              setH("");
            } else setH(e.target.value);
          }}
          value={H ? H : C}
        />
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 1);
            }}
          >
            1
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 2);
            }}
          >
            2
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 3);
            }}
          >
            3
          </button>
          <button
            className="bt"
            onClick={() => {
              if (!A) {
                setA(H);
                setH("");
              } else if (C) {
                setA(C);
                setB("");
                setC("");
              } else if (A && H) {
                setA(parseFloat(A) + parseFloat(H))
                setH("");
              } else if (A && !B) {
                setC(parseFloat(A) + parseFloat(H));
                setB(H);
              } else if (A && B) {
                operation(A, B);
                setA(C);
                setB("");

                setH("");
              }

              setS("+");
              setH("");
            }}
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 4);
            }}
          >
            4
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 5);
            }}
          >
            {" "}
            5
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 6);
            }}
          >
            6
          </button>
          <button className="bt">-</button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 7);
            }}
          >
            7
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 8);
            }}
          >
            8
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10 + 9);
            }}
          >
            9
          </button>
          <button className="bt">*</button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="bt"
            onClick={() => {
              setB("");
              setA("");
              setC("");
              setS("");
              setH("");
            }}
          >
            C
          </button>
          <button
            className="bt"
            onClick={() => {
              setH(H * 10);
            }}
          >
            0
          </button>
          <button
            className="bt"
            onClick={() => {
              if (!B) {
                setC(parseFloat(A) + parseFloat(H));
                setB(H);
                setH("");
              } else {
                operation(A, B);
              }
            }}
          >
            =
          </button>
          <button className="bt">/</button>
        </div>
      </div>
      <h5>
        {A} {S} {B}={C}
      </h5>
    </div>
  );
};
export default RemakeCalculator;
