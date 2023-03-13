import React from "react";

export default function Recipe({ currentFoodId, foodName, foodDescription, foodImage, updateDishWithForm }) {
  return (
    <div id={currentFoodId} className="dish--container">
      <div className="dish--wrapper">
        <img className="foodImage" src={foodImage} onClick={(event) => updateDishWithForm(event, currentFoodId, foodName, foodDescription)}/>
        <span className="foodName">{foodName}</span>
      </div>
    </div>
  );
}
