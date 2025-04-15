// ProductCard.js
import React from 'react';
import './ProductCard.css';  // Assure-toi d'avoir ce fichier CSS si tu veux personnaliser le style

function ProductCard({ image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;  // Assure-toi que c'est un export par défaut

  