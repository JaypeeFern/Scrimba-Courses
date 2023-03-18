import react from 'react'

export default function Start({quiz, startQuiz}) {

    // Override Styles and add props so that if the button is clicked the quiz component is rendered
    const style = {
        display: quiz ? 'none' : 'block'
    }

    return (
        <section style={style} className='start--wrapper'>
            <div className='start--container'>
                <h1 className='start--title'>Quizzical</h1>
                <p className='start--desc'>Quizzical is a fun web-based trivia game with a variety of topics to test your knowledge. Easy to play and challenging, it's perfect for all types of players.</p>
                <button onClick={startQuiz} type='button' className='start--btn'>Start Quiz</button>
            </div>
        </section>
    )
}