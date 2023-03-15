import React from "react";

function PlantCard({listing}) {
  return (
    <li className="card">
      <img src={listing.image} alt={listing.name} />
      <h4>{listing.name}</h4>
      <p>Price: {listing.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
