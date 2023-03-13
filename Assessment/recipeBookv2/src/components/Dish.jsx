import React from "react";

export default function Recipe({ currentFoodId, foodName, foodDescription, foodImage, updateDishWithForm }) {
  return (
    <div id={currentFoodId} className="dish--container">
      <div className="dish--wrapper">
        <img className="foodImage" src={foodImage}/>
        <span className="foodName" onClick={(event) => updateDishWithForm(event, currentFoodId, foodName, foodDescription)}>{foodName}</span>
      </div>
    </div>
  );
}
