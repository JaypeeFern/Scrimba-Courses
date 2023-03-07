import React from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = React.useState(
    {
      email: '',
      password: '',
      confirmPassword: '',
      newsLetter: false
    }
  )

  // console.log(formData)

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

  function handleChange(event) {

    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)

    if (formData.password != formData.confirmPassword) {
      console.log('Password do not match!')
    }

    if (formData.newsLetter == true) {
      console.log('Thanks for signing up for our newsletter!')
    }

  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input name='email' 
        value={formData.email} 
        type="email" 
        placeholder="Email address" 
        className="form--input" 
        onChange={handleChange}
        />

        <input name='password' 
        value={formData.password} 
        type="password" 
        placeholder="Password" 
        className="form--input" 
        onChange={handleChange}
        />

        <input name='confirmPassword' 
        value={formData.confirmPassword} 
        type="password" 
        placeholder="Confirm password" 
        className="form--input" 
        onChange={handleChange}
        />

        <div className="form--marketing">
          <input name='newsLetter' onChange={handleChange} id="okayToEmail" type="checkbox" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className="form--submit">Sign up</button>
      </form>
    </div>
  )
}

export default App