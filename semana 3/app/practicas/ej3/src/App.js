import './App.css';
import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./Progreso";
export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Barra de Progreso</h1>
        <ProgressBar width={val} />
        <form>
          <label for="html">Ingresar porcentaje:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
