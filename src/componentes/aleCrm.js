import React from 'react';
import './aleCrm.css';

function Card({ title, onButtonClick }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae metus euismod...</p>
      <button onClick={onButtonClick}>Ir a {title}</button>
    </div>
  );
}

export default Card;