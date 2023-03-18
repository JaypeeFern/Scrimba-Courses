import React from 'react'
import Start from './Components/Start'
import Quiz from './Components/Quiz'
import { nanoid } from 'nanoid'

function App() {

  /* -------------------------------------------------------------------------- */
  /*                            Start Quiz Component                            */
  /* -------------------------------------------------------------------------- */

  // Create useState for starting the game
  const [quiz, setQuiz] = React.useState(false)

  // Function to handle the start of the quiz
  function startQuiz() {
    setQuiz(quiz => !quiz)
  }

  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               Quiz Component                               */
  /* -------------------------------------------------------------------------- */

  // Create useState for the questions
  const [questions, setQuestions] = React.useState([])

  // Fetch data from the API
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
      })
      .catch(error => console.error(error));
  }, [])

  // Function to get the answers from the user
  function getAnswers(event) {
    event.preventDefault()
    console.log(event.target.textContent)
  }

  // Map through the questions and create a new array with the Quiz component
  const quizQuestions = questions.map((question, index) => (
    <Quiz
      key={nanoid()}
      index={index}
      quiz={quiz}
      quizQuestions={question.question}
      quizAnswers={question.incorrect_answers.concat(question.correct_answer)}
      getAnswers={getAnswers}
    />
  ))
  /* -------------------------------------------------------------------------- */

  return (
    <main className='main--container'>
      <Start
        quiz={quiz}
        startQuiz={startQuiz}
      />
      {quiz && <section className='quiz--container'>
        <div className='quiz--wrapper'>
          <form>
            {quizQuestions}
            {/* <button>Submit</button> */}
          </form>
        </div>
      </section>}
    </main>
  )
}

export default App
