import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../calculator_logic/calculate";
import "../App.css";

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setState(prevState => calculate(prevState, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
