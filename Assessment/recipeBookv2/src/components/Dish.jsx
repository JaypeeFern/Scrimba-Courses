import React from "react";
import { Button, Modal } from 'react-bootstrap';

export default function Recipe({ currentFoodId, selectedFoodId, foodName, foodDescription, foodImage, updateDishWithForm, test, show, handleClose, handleShow}) {
  return (
    <div id={currentFoodId} className="dish--container">
      <div className="dish--wrapper">
        <img className="foodImage" src={foodImage} onClick={() => handleShow(currentFoodId)}/>
        <span className="foodName" onClick={(event) => updateDishWithForm(event, currentFoodId, foodName, foodDescription)}>{foodName}</span>
      </div>
      <Modal backdrop="static" centered show={show && currentFoodId === selectedFoodId} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">{foodName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {foodDescription}
        </Modal.Body>
      </Modal>
    </div>
  );
}
