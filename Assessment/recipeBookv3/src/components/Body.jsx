import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Body({ currentFoodId, dishElements, Forms, showUpdateForm, showAddForm, handleShowAddForm, createNewFood }) {
    const bodyText = "Welcome to my Food Journal App, a platform that showcases my skills in React! This app is the culmination of everything I've learned so far in React JS, and is designed to be a simple, tool for viewing descriptions of dishes."
    const [isTypingComplete, setIsTypingComplete] = React.useState(false)
    return (
        <main className='body--main-container'>
            <section className='main--landing container-fluid mt-4 mb-3'>
                <div className='main--content text-white fs-5 fw-light'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(bodyText)
                                .callFunction(() => {
                                    setIsTypingComplete(true);
                                })
                                .start();
                        }}
                        options={{
                            delay: 20,
                        }}
                    />
                    <br />
                    {isTypingComplete && <button type='button' onClick={(event) => handleShowAddForm(event)} className='fade-up btn btn-warning mt-3' id='showForm'>{showAddForm | showUpdateForm ? 'Hide Form' : 'Show Form'}</button>}
                </div>
            </section>
            <section className={`forms--container ${showAddForm | showUpdateForm ? 'py-5' : ''}`}>
                <Forms
                    currentFoodId={currentFoodId}
                    showUpdateForm={showUpdateForm}
                    showAddForm={showAddForm}
                    createNewFood={createNewFood}
                />
            </section>
            <section className={`feature--container mx-3 ${isTypingComplete ? 'fade-up' : ''}`}>
                {isTypingComplete && dishElements}
            </section>
        </main>
    )
}


//  {/* <span className='fade-up'>Welcome to my Dish Viewing App, a platform that showcases my skills in React! This app is the culmination of everything I've learned so far in React JS, and is designed to be a simple, tool for viewing descriptions of dishes.</span> */}