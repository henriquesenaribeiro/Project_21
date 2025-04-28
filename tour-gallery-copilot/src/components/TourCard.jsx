import React from 'react';

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button onClick={() => onRemove(id)} className="not-interested-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;
