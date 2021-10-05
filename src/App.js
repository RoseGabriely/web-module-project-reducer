import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  memoryResult,
  clearMemory,
} from "./actions";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const addOneHandler = () => {
  //   dispatch(addOne());
  // };

  const handleValues = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleAddMemory = () => {
    dispatch(addMemory());
  };

  const handleMemoryResult = () => {
    dispatch(memoryResult());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleAddMemory()} />
              <CalcButton value={"MR"} onClick={() => handleMemoryResult()} />
              <CalcButton value={"MC"} onClick={() => handleClearMemory()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleValues(1)} />
              <CalcButton value={2} onClick={() => handleValues(2)} />
              <CalcButton value={3} onClick={() => handleValues(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleValues(4)} />
              <CalcButton value={5} onClick={() => handleValues(5)} />
              <CalcButton value={6} onClick={() => handleValues(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleValues(7)} />
              <CalcButton value={8} onClick={() => handleValues(8)} />
              <CalcButton value={9} onClick={() => handleValues(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")} />
              <CalcButton value={"*"} onClick={() => handleOperation("*")} />
              <CalcButton value={"-"} onClick={() => handleOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
