import React from "react";

export default function Create(props) {
  return (
    <div className="form--container">
      <form className="form" onSubmit={(event) => props.createNewFood(event)}>
        <div className="mb-3 w-75">
          <label htmlFor="foodName">Dish Name</label>
          <input type="text" className="form-control" id="foodName" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="foodDescription">Dish Description</label>
          <textarea className="form-control" id="foodDescription" />
        </div>
        <button type="submit" className="btn btn-primary">Add New Food</button>
      </form>
    </div>
  );
}
