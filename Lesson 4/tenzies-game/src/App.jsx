import React from 'react'
import Die from './components/Die'

function App() {

  // Create a function to generate a new array of 10 random numbers between 1 and 6
  function allNewDice() {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push( Math.floor(Math.random() * (6 - 1 + 1) + 1))
    }
    return arr
  }

  // Create state to hole dice numbers 
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  // Map over the state to generate our array and render those elements to the DOM
  const diceElements = [
    diceNumbers.map((number, index) => {
      return <Die key={index} value={number} />
    })
  ]

  // Create a function to roll the dice
  function rollNewDice() {
    setDiceNumbers(allNewDice())
  }

  return (
    <main className='mainContainer'>
      <section className='header--container'>
        <span className='header--title'>Tenzies</span>
        <span className='header--desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</span>
      </section>
      <section className='die--container'>
      {diceElements}
      </section>
      <button type='button' onClick={rollNewDice} className='die-roll-btn' >Roll</button>
    </main>
  )
}

export default App
