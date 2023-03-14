import React from "react";
import AddDish from "./AddDish";
import UpdateDish from "./UpdateDish";

export default function Forms({currentFoodId, showAddForm, showUpdateForm, createNewFood, handleDeleteDish}) {

    return (
        <div className="form--container">
            {showAddForm && <AddDish createNewFood={createNewFood} />}
            {showUpdateForm && <UpdateDish currentFoodId={currentFoodId} handleDeleteDish={handleDeleteDish}/>}
        </div>
    );
}