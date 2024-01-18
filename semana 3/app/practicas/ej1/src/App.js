import { useState } from "react";
export default function App() {
  const [mostrar, setOcultar] = useState(true);
  return (
    <div className="contenedor">
      <button onClick={() => setOcultar((mostrar) => !mostrar)}>
        {" "}
        mostrar / ocultar
      </button>
      {mostrar ? <h1>Hola Buenos Dias</h1> : null}
    </div>
  );
}