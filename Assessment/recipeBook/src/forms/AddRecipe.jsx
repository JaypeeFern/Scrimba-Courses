import React from "react";

export default function Create(props) {
  return (
    <div className="form--container">
      <form onSubmit={(event) => props.createNewRecipe(event)}>
        <label htmlFor="recipeName">Recipe Name</label>
        <input type="text" name="recipeName" id="recipeName" />
        <button type="submit">Add New Recipe</button>
      </form>
    </div>
  );
}
