import React, { useState, useEffect } from "react";

  const Card = () => {
    const [nombre, setNombre] = useState("");
    const [cantante, setCantante] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const nombreCaracteres = nombre.trim().length >= 3;
      const nombreEsapcios = nombre.indexOf(" ") === -1
  
      if (!nombreCaracteres || !nombreEsapcios) {
        alert("El Nombre debe tener al menos 3 caracteres y no debe contener espacios en blanco");
        return;
      }
        
          const cantanteCaracteres = cantante.trim().length >= 6;
 
  
      if (!cantanteCaracteres) {
        alert("El Cantate debe tener al menos 6 caracteres");
        return;
      }
  
  
      const nombreCapturado = nombre; 
      const cantanteCapturado = cantante;
  

      alert(`Nombre: ${nombreCapturado} | Cantante: ${cantanteCapturado}`);
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cantante"
        value={cantante}
        onChange={(e) => setCantante(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Card;