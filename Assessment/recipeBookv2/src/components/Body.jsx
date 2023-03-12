import React from 'react'
import { Form } from 'react-bootstrap'

export default function Body({ dishElements, Forms, createNewFood, showUpdateForm }) {
    return (
        <main className='body--main-container'>
            <section className='main--landing container-fluid mt-4'>
                <div className='main--content text-white fs-5 fw-light'>
                    <span className='fade-up'>Welcome to my Dish Viewing App, a platform that showcases my skills in React! This app is the culmination of everything I've learned so far in React JS, and is designed to be a simple, tool for managing your favorite dishes.</span>
                </div>
            </section>
            {/* Add Styling */}
            <section>
                {dishElements}
            </section>
            <section>
                <Forms
                createNewFood={createNewFood}
                showUpdateForm={showUpdateForm}
                />
            </section>
            {/* End Styling */}
        </main>
    )
}