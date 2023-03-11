import React from "react";

export default function Recipe({currentRecipeId, recipeName, foodImage}) {
  return (
    <div id={currentRecipeId} className="recipe-container">
      <img className="foodImage" src={foodImage} />
      <span className="recipeName">{recipeName}</span>
    </div>
  );
}
