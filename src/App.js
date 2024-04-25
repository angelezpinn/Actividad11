import React, { useEffect, useState } from 'react';
import Header from './componentes/titulo';
import Card from './componentes/aleCrm';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://klvyjzzctlgdojqtvork.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdnlqenpjdGxnZG9qcXR2b3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMjI3OTAsImV4cCI6MjAyODg5ODc5MH0.P6YayJKLBJ0BTg5NzTLGrW8-RVKL1s4sstiWUzTg9u0");

import './App.css';

function App() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    getUsuarios();
  },[]);

  async function getUsuarios(){
    const {data} = await supabase.from("usuarios").select();
    setUsuarios(data);
  }

  const cards = ['users', 'clients', 'products', 'sessions', 'categories', 'directions', 'genders', 'sessionsProducts'];

  function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <div>
      <ul>
        {usuarios.map((usuarios)=>(
        <li key={usuarios.nombre}>{usuarios.nombre}</li>
        ))}
      </ul>
      <Header />
      <div className="container" id="cardContainer">
        {cards.map(cardName => (
          <Card
            key={cardName}
            title={toTitleCase(cardName)}
            onButtonClick={() => window.location.href = `${cardName}.html`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
