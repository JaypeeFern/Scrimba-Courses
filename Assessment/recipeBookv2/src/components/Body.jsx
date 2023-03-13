import React from 'react'

export default function Body({ dishElements, Forms, createNewFood, showUpdateForm, showAddForm, handleShowAddForm }) {
    return (
        <main className='body--main-container'>
            <section className='main--landing container-fluid mt-4'>
                <div className='main--content text-white fs-5 fw-light'>
                    <span className='fade-up'>Welcome to my Dish Viewing App, a platform that showcases my skills in React! This app is the culmination of everything I've learned so far in React JS, and is designed to be a simple, tool for viewing your dishes.</span>
                    <br />
                    <button type='button' onClick={(event) => handleShowAddForm(event)} className='fade-up btn btn-warning mt-3' id='showForm'>{showAddForm | showUpdateForm ? 'Hide Form' : 'Show Form'}</button>
                </div>
            </section>
            <section className={`forms--container ${showAddForm | showUpdateForm ? 'py-5' : ''}`}>
                <Forms
                    createNewFood={createNewFood}
                    showUpdateForm={showUpdateForm}
                    showAddForm={showAddForm}
                />
            </section>
            <section className='feature--container mt-3 mx-2 fade-up'>
                {dishElements}
            </section>
        </main>
    )
}