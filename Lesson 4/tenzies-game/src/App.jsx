import React from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

  // Create state to hole dice numbers 
  const [dice, setDice] = React.useState(allNewDice())

  // Create state for represnting if the user has one the game or not
  const [tenzies, setTenzies] = React.useState(false)

  // Create a function to generate a new array of 10 random numbers between 1 and 6
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDice
  }

  // Create a function to roll the dice
  function rollNewDice() {
    setDice(() => {
      return dice.map(die => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() }
      })
    })
  }

  // Create a function to hold dice
  function holdDice(id) {
    setDice(() => {
      return dice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }

  // Create a useEffect that will run everytime the 'dice' state changes
  React.useEffect(() => {
    /* -------------------------------------------------------------------------- */
    /*                                   MY CODE                                  */
    /* -------------------------------------------------------------------------- */

    // Create a variable to hold the value of the first die in the array
    const firstDie = dice[0].value
    // Create a variable to hold the number of dice that match the first die
    let matchingDie = 0
    // Loop over the dice array and increment the 'numMatchingDice' variable if the current die matches the first die
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].value === firstDie && dice[i].isHeld) {
        matchingDie++
      }
    }
    // If the number of matching dice is equal to the length of the dice array, set the 'tenzies' state to true
    if (matchingDie === dice.length) {
      setTenzies(true)
      console.log('You Won!')
    }

    /* ----------------------------------- END ---------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                TEACHER CODE                                */
    /* -------------------------------------------------------------------------- */

    // // Create a variable to hold the value of the first die in the array
    // const allHeld = dice.every(die => die.isHeld)
    // // Create a variable to hold the number of dice that match the first die
    // const firstValue = dice[0].value
    // // Loop over the dice array and increment the 'numMatchingDice' variable if the current die matches the first die
    // const allSameValue = dice.every(die => die.value === firstValue)
    // // If the number of matching dice is equal to the length of the dice array, set the 'tenzies' state to true
    // if (allHeld && allSameValue) {
    //   setTenzies(true)
    //   console.log("You won!")
    // }

    /* ----------------------------------- END ---------------------------------- */


  }, [dice])

  // Map over the state to generate our array and render those elements to the DOM
  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={holdDice}
    />
  )

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
