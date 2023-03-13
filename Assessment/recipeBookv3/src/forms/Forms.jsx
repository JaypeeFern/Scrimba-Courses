import React from "react";
import AddDish from "./AddDish";
import UpdateDish from "./UpdateDish";

export default function Forms({showAddForm, showUpdateForm, createNewFood}) {

    return (
        <div className="form--container">
            {showAddForm && <AddDish createNewFood={createNewFood}/>}
            {showUpdateForm && <UpdateDish/>}
        </div>
    );
}