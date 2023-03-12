import React from "react";

export default function Update({ currentFoodId, foodName, foodDescription, foodImage, updateDish}) {
  return (
    <div className="form--container">
      <form className="form">
        {/* <div className="mb-3 w-75" >
          <label htmlFor="foodName">Dish ID</label>
          <input type="text" className="form-control" readOnly disabled id="currentFoodId"/>
        </div> */}
        <div className="mb-3 w-75">
          <label htmlFor="foodName">Dish Name</label>
          <input type="text" className="form-control" id="foodName"/>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="foodDescription">Dish Description</label>
          <textarea className="form-control" id="foodDescription" />
        </div>
        <button type="submit" className="btn btn-success" id="updateDish"> Update Dish</button>
      </form>
    </div>
  );
}
