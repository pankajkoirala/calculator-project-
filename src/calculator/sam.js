import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';


let UI = () => {
    const [A, setA] = useState("")
    const [B, setB] = useState("")
    const [C, setC] = useState("")
    const [op, setOp] = useState("")
    const [x, setX] = useState("")
    console.log("A", A);
    console.log("Op", op);
    console.log("B", B);
    console.log("C", C);
    console.log("X", x);

    let calc = (a, b) => {
        switch (op) {
            case "+":
                setC(parseFloat(parseFloat(a) + parseFloat(b)));

                break;
            case "-":
                setC(parseFloat(a) - parseFloat(b));
                break;
            case "/":
                setC(parseFloat(a) / parseFloat(b));
                break;
            case "*":
                setC(parseFloat(a) * parseFloat(b));
                break;
            default:
                break;
        }
    }

    let reset=()=>{
        setC("")
        setA("")
        setOp("")
        setX("")
        setB("")
    }


    return (
        <div className="m-auto w-50">
            <Input name="x" type="number" onChange={(e) => {
                if(A&&B&&C){
                    reset()
                }
                setX(e.target.value)
            }} placeholder="type Number" value={x} />
            <ButtonGroup size="lg" className="my-2 w-100">
                <Button className="mx-2" onClick={() => {
                    if (!A) {
                        setA(x)
                    }
                    else if (C) {
                        setA(C)
                        setB("")
                        setC("")
                    } else if (A && B) {
                        calc(A, B)
                    } else if (A && !B) {
                        setA(parseFloat(A) + parseFloat(x));
                    }
                    else {
                        setB(x)
                    }
                    setX("")
                    setOp("+")
                }}>+</Button>
               <Button className="mx-2" onClick={() => {
                    if (!A) {
                        setA(x)
                    }
                    else if (C) {
                        setA(C)
                        setB("")
                        setC("")
                    } else if (A && B) {
                        calc(A, B)
                    } else if (A && !B) {
                        setA(parseFloat(A) - parseFloat(x));
                    }
                    else {
                        setB(x)
                    }
                    setX("")
                    setOp("-")
                }}>-</Button>
                <Button className="mx-2" onClick={() => {
                    if (!A) {
                        setA(x)
                    }
                    else if (C) {
                        setA(C)
                        setB("")
                        setC("")
                    } else if (A && B) {
                        calc(A, B)
                    } else if (A && !B) {
                        setA(parseFloat(A) * parseFloat(x));
                    }
                    else {
                        setB(x)
                    }
                    setX("")
                    setOp("*")
                }}>*</Button>
                <Button className="mx-2" onClick={() => {
                    if (!A) {
                        setA(x)
                    }
                    else if (C) {
                        setA(C)
                        setB("")
                        setC("")
                    } else if (A && B) {
                        calc(A, B)
                    } else if (A && !B) {
                        setA(parseFloat(A) / parseFloat(x));
                    }
                    else {
                        setB(x)
                    }
                    setX("")
                    setOp("/")
                }}>/</Button>
            </ButtonGroup><br />
            <Button color="primary" className="w-100" onClick={() => {
                if (!B) {
                    setB(x);
                    setX("")
                    calc(A, x)
                }
                else {
                    calc(A, B)
                }
                ;
            }}>=</Button>
            <Button color="danger" className="w-100 mt-4" onClick={() => {
                reset()
            }}>C</Button>
            <h2>{A} {op} {B} {op? "=" : ""} {C}</h2>
        </div>
    )
}

export default UI