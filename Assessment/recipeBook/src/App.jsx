import React, { useEffect } from "react";
import Header from "./components/Header";
import Dish from './components/Dish'
import AddDish from "./forms/AddDish";
import { nanoid } from 'nanoid'

function App() {

    // Get the data from Local Storage
    const getFood = () => JSON.parse(localStorage.getItem('food')) || []
    // Set the data to the state
    const [food, setFood] = React.useState(getFood)
    // Create state for dish ID
    const [currentFoodId, setCurrentFoodId] = React.useState((food[0] && food[0].id) || '')
    // Add the data to the Local Storage
    localStorage.setItem('food', JSON.stringify(food))
    // Everytime the state changes, the data in the Local Storage will be updated
    React.useEffect(() => {
      const getFood = JSON.parse(localStorage.getItem('food'))
      setFood(getFood)
    }, [currentFoodId])

  // Random Food Image
    const [imageUrl, setImageUrl] = React.useState('');
    
    // API Key for Pexels
    // TmvsB31UhnWsaSc1eweoin54jJkU8D59cu4UEdNuGmFYtQCiqAdoGdqh
    
    useEffect(() => {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      const fetchImage = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=dish%20presentation%20close%20up&w=1366&h=200&page=${randomNumber}&per_page=10`, {
          headers: {
            Authorization: 'TmvsB31UhnWsaSc1eweoin54jJkU8D59cu4UEdNuGmFYtQCiqAdoGdqh'
          }
        });
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.photos.length);
        setImageUrl(data.photos[randomIndex].src.large);

        const remainingRequests = response.headers.get('X-Ratelimit-Remaining');
        console.log(`Remaining requests: ${remainingRequests}`);
      };
      fetchImage();
    }, [currentFoodId]);

    // Create a new dish
    function createNewFood(event) {
      event.preventDefault()
      const newFood = { // Create a new dish object
        id: nanoid(),
        foodName: event.target.foodName.value,
        foodDescription: event.target.foodDescription.value,
        foodImage: imageUrl
      }
      // Add the new dish to the state array if the recipe name is not empty
      if (newFood.foodName !== '') {
        setFood(prevFood => [...prevFood, newFood])
      } else {
        alert('Please enter dish name')
      }
      // Set the new dish as the current recipe ID
      setCurrentFoodId(newFood.id)
    }

    // Delete a recipe
    function deleteFood(event, foodId) {
      event.stopPropagation()
      // Filter the recipe array and return a new array without the dish that has the same ID as the recipe ID that was passed in
      setFood(prevFoods => prevFoods.filter(prevFood => prevFood.id !== foodId))
    }

    // Update a recipe
    function updateFood(event, foodId, foodName, foodDescription) {
      event.stopPropagation()
      // Store data in an array
      const updatedFood = {
        id: foodId,
        foodName: foodName,
        foodDescription: foodDescription,
      }
      console.log(updatedFood)
    }

    // Map through the recipe array and return a Food component for each Dish
    const dishElements = food.map(food => {
      return (
        <Dish
          key={food.id}
          currentFoodId={food.id}
          foodName={food.foodName}
          foodDescription={food.foodDescription}
          foodImage={food.foodImage}
          deleteFood={deleteFood}
          updateFood={updateFood}
        />
      )
    })

    return (
      <div className="main-container">
        <Header />
        <main className="body--container">
          <div className='body--left'>
            {dishElements}
          </div>
          <div className='body--right'>
            <AddDish
              createNewFood={createNewFood}
            />
          </div>
        </main>
      </div>
    );
  }

  export default App;

// https://helios-i.mashable.com/imagery/articles/05fQvWTQeAAdXYZNNst8ukj/hero-image.fill.size_1200x1200.v1619479187.png
// https://mashable.com/article/best-free-recipe-apps
// https://www.google.com/search?q=Recipe+Book+App&sxsrf=AJOqlzWuRYZUzfWZIONXd2Xeu-trWqY0Mw:1678425958971&source=lnms&tbm=isch&sa=X&ved=2ahUKEwihv8P4z9D9AhWomlYBHUMPAPQQ_AUoAXoECAEQAw&biw=1366&bih=636&dpr=1#imgrc=RNDiKYH7mXC_cM
