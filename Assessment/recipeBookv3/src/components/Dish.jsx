import React from "react";
import { Button, Modal } from 'react-bootstrap';

export default function Recipe({ currentFoodId, selectedFoodId, foodName, foodDescription, foodImage, updateDishWithForm, showModal, handleModalClose, handleModalShow}) {
  return (
    <div id={currentFoodId} className="dish--container">
      <div className="dish--wrapper">
        <img className="foodImage" src={foodImage} onClick={() => handleModalShow(currentFoodId)}/>
        <span className="foodName" onClick={(event) => updateDishWithForm(event, currentFoodId, foodName, foodDescription)}>{foodName}</span>
      </div>
      <Modal backdrop="static" centered show={showModal && currentFoodId === selectedFoodId} onHide={handleModalClose}>
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
