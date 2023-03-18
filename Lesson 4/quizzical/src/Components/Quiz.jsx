import React from 'react'
import he from 'he';

export default function Quiz({ quiz, quizQuestions, quizAnswers, getAnswers }) {

    // Create a style object to show the quiz component when the game starts  
    const style = {
        display: !quiz ? 'none' : 'block'
    }

    return (
        <div className='mb-3' style={style}>
            <h1 className="quiz--question">{he.decode(quizQuestions)}</h1>
            <div className="quiz--answers">
            {quizAnswers.map((answer, i) => (
                    <button key={i} onClick={(event) => getAnswers(event)} title={he.decode(answer)} type='button' className='quiz--choice'>{he.decode(answer)}</button>
                ))}
            </div>
        </div>
    )
}

{/* <button onClick={(event) => getAnswers(event)} type='button' className='quiz--choice'>Hola</button>
<button onClick={(event) => getAnswers(event)} type='button' className='quiz--choice'>Au Revoir</button>
<button onClick={(event) => getAnswers(event)} type='button' className='quiz--choice'>Salir</button> */}