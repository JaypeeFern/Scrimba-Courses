import React from "react";

export default function Recipe({ currentFoodId, foodName, foodDescription, foodImage, updateFood, deleteFood}) {
  return (
    <div id={currentFoodId} className="recipe-container">
      <img className="foodImage" src={foodImage}/>
      <span className="foodName">{foodName}</span>
      <button className="btn btn-danger btn-sm deleteDish" onClick={(event) => deleteFood(event, currentFoodId)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="btn btn-success btn-sm updateDish" onClick={(event) => updateFood(event, currentFoodId, foodName, foodDescription)}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  );
}
