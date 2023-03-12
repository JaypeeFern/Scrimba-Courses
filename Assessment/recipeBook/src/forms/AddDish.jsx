import React from "react";

export default function Create({createNewFood}) {
  return (
    <div className="form--container">
      <form className="form" onSubmit={(event) => createNewFood(event)}>
        <div className="mb-3 w-75">
          <label htmlFor="foodName">Dish Name</label>
          <input type="text" className="form-control" id="foodName"/>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="foodDescription">Dish Description</label>
          <textarea className="form-control" id="foodDescription" />
        </div>
        <button type="submit" className="btn btn-primary" id="addDish">Add New Dish</button>
      </form>
    </div>
  );
}
