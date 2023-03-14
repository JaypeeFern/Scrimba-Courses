import React from "react";

export default function Create({ createNewFood }) {
  return (
    <div className="form--container">
      <form className="form" onSubmit={(event) => createNewFood(event)}>
        <div className="mb-3 w-75">
          <label htmlFor="foodName">Dish Name</label>
          <span className="form-text ms-2 ">(Leave all fields blank to generate a random dish)</span>
          <input type="text" className="form-control" id="foodName" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="foodDescription">Dish Description</label>
          <textarea className="form-control" id="foodDescription" />
        </div>
        <div className="mb-3 w-75">
          <label className="form-label" htmlFor="dishImage">Upload Image</label>
          <input className="form-control" type="file" id="dishImage" />
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary" id="addDish">Add New Dish</button>
        </div>
      </form>
    </div>
  );
}