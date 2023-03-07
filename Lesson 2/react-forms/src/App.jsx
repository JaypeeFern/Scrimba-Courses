import React from 'react'
import './App.css'

function App() {

  /**
   * Challenge: Connect the form to local state
   * 
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the 
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  // Create State for form Data
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    newsLetter: true
  })

  // Create handleChange() function to update state 
  function handleChange(event) {
    const { name, value, checked, type } = event.target // Destructure event.target 
    // Check if input type is checkbox and update state accordingly
    setFormData(prevFormData => {
      return {
        ...prevFormData, // Spread previous state
        [name]: type === 'checkbox' ? checked : value // To check if input type is checkBox or not
      }
    })
  }

  // Creat handleSubmit() function to handle form submission
  function handleSubmit(event) {
    console.log(formData)
    event.preventDefault() // Prevent default behaviour of form submission

    if (formData.password != formData.confirmPassword) {
      console.log('Password do not match!')
    }

    if (formData.newsLetter == true) {
      console.log('Thank you for signing up to our newsletter!')
    }

  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsLetter"
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  )
}

export default App