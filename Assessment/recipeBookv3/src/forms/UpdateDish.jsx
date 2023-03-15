import React from "react";

export default function Update() {
  return (
    <div className="form--container">
      <form className="form">
        <input type="text" className="form-control" readOnly disabled hidden id="currentFoodId" />
        <div className="mb-3 w-75">
          <label htmlFor="foodName">Dish Name</label>
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
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-6">
              <button type="submit" className="btn btn-success" id='updateDish'>Update Dish</button>
            </div>
            <div className="col-6">
              <button type="submit" className="btn btn-danger" id="deleteDish">Delete Dish</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


// onSubmit={(event) => handleDeleteDish(event, currentFoodId)}