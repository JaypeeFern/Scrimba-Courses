import React from "react";
import AddDish from "./AddDish";
import UpdateDish from "./UpdateDish";

export default function Forms({ showAddForm, showUpdateForm, handleShowAddForm, handleShowUpdateForm, createNewFood, updateDish }) {

    return (
        <div className="form--container">
            {!showUpdateForm && <AddDish createNewFood={createNewFood}/>}
            {showUpdateForm && <UpdateDish/>}
        </div>
    );
}