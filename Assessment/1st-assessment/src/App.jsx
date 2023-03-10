import React from "react";
import Header from "./components/Header";
import Recipe from './components/Recipe'
import { nanoid } from 'nanoid'

function App() {

  // Get the data from Local Storage
  const getRecipe = () => JSON.parse(localStorage.getItem('recipe')) || []
  // Set the data to the state
  const [recipe, setRecipe] = React.useState(getRecipe)
  // Create state for Recipe ID
  const [currentRecipeId, setCurrentRecipeId] = React.useState((recipe[0] && recipe[0].id) || '')
  // Add the data to the Local Storage
  localStorage.setItem('recipe', JSON.stringify(recipe))
  // Everytime the state changes, the data in the Local Storage will be updated
  React.useEffect(() => {
    const getRecipe = JSON.parse(localStorage.getItem('recipe'))
    setRecipe(getRecipe)
  }, [currentRecipeId])

  // Create a new recipe
  function createNewRecipe(event) {
    event.preventDefault()
    const newRecipe = { // Create a new recipe object
      id: nanoid(),
      recipeName: event.target.recipeName.value,
    }
    // Add the new recipe to the state array if the recipe name is not empty
    if (newRecipe.recipeName !== '') {
      setRecipe(prevRecipe => [...prevRecipe, newRecipe])
    } else {
      alert('Please enter a recipe name')
    }
    // Set the new recipe as the current recipe ID
    setCurrentRecipeId(newRecipe.id)
  }

  // Map through the recipe array and return a Recipe component for each recipe
  const recipeElements = recipe.map(recipe => {
    return (
      <Recipe
        key={recipe.id}
        recipeName={recipe.recipeName}
        foodImage='https://thumbs.dreamstime.com/b/panorama-banner-raw-chicken-portions-cooking-barbecuing-skinless-breasts-diced-strips-goulash-stir-fry-legs-157723250.jpg'
      />
    )
  })

  // localStorage.clear()

  return (
    <div className="main-container">
      <Header />
      <main className="body--container">
        <div className='body--left'>
          {recipeElements}
        </div>
        <div className='body--right'>
          <div className="form--container">
            <form onSubmit={createNewRecipe}>
              <label htmlFor='recipeName'>Recipe Name</label>
              <input type='text' name='recipeName' id='recipeName' />
              <button type='submit'>Add New Recipe</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// https://helios-i.mashable.com/imagery/articles/05fQvWTQeAAdXYZNNst8ukj/hero-image.fill.size_1200x1200.v1619479187.png
// https://mashable.com/article/best-free-recipe-apps
// https://www.google.com/search?q=Recipe+Book+App&sxsrf=AJOqlzWuRYZUzfWZIONXd2Xeu-trWqY0Mw:1678425958971&source=lnms&tbm=isch&sa=X&ved=2ahUKEwihv8P4z9D9AhWomlYBHUMPAPQQ_AUoAXoECAEQAw&biw=1366&bih=636&dpr=1#imgrc=RNDiKYH7mXC_cM
