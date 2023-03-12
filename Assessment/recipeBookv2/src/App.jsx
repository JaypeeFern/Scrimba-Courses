import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Dish from './components/Dish'
import AddDish from "./forms/AddDish";
import UpdateDish from "./forms/UpdateDish";
import Forms from "./forms/Forms";
import { nanoid } from 'nanoid'
import './styles.css'

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

  React.useEffect(() => {
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
    // Add the new dish to the state array if the dish name is not empty
    if (newFood.foodName !== '') {
      setFood(prevFood => [...prevFood, newFood])
    } else {
      alert('Please enter dish name')
    }
    // Set the new dish as the current dish ID
    setCurrentFoodId(newFood.id)
  }

  // Delete a dish
  function deleteDish(event, foodId) {
    event.preventDefault()
    // Filter the dish array and return a new array without the dish that has the same ID as the dish ID that was passed in
    setFood(prevFoods => prevFoods.filter(prevFood => prevFood.id !== foodId))
  }

  // Create state for the forms to show or hide
  const [showAddForm, setShowForm1] = React.useState(false);
  const [showUpdateForm, setShowUpdateForm] = React.useState(false);

  // Show the add form
  function handleShowAddForm(event) {
    event.preventDefault()
    showAddForm(true);
    setShowUpdateForm(false);
  }

  // Show the update form
  function handleShowUpdateForm(event) {
    event.preventDefault()
    setShowForm1(false)
    setShowUpdateForm(true)
  }

  // Update a dish
  function updateDish(event, foodId) {
    event.preventDefault()
    handleShowUpdateForm(event)
    // Find the object with the matching ID
    const selectedFood = food.find(food => food.id === foodId);
    if (selectedFood) {
      // Populate the form with the data from the selected object
      document.getElementById('foodName').value = selectedFood.foodName;
      document.getElementById('foodDescription').value = selectedFood.foodDescription;

      // Add an event listener to the form submit button
      document.getElementById('updateDish').addEventListener('click', function (event) {

        // Get the new values from the form
        const updatedFood = {
          foodName: document.getElementById('foodName').value,
          foodDescription: document.getElementById('foodDescription').value,
        };

        // Find the index of the object with the matching ID
        const index = food.findIndex(food => food.foodId === updatedFood.foodId);

        if (index >= 0) {
          // Modify the existing object with the new values
          food[index].foodName = updatedFood.foodName;
          food[index].foodDescription = updatedFood.foodDescription;

          // Update the data in local storage
          localStorage.setItem('food', JSON.stringify(food));

          console.log(food[index]);
        } else {
          console.log(`Food with ID ${updatedFood.foodId} not found.`);
        }
      });
    } else {
      console.log(`Food with ID ${foodId} not found.`);
    }
  }

  function updateDishWithForm(event, foodId) {
    handleShowUpdateForm(event);
    setTimeout(() => {
      updateDish(event, foodId);
    }, 200)
  }

  // Map through the dish array and return a Food component for each Dish
  const dishElements = food.map(food => {
    return (
      <Dish
        key={food.id}
        currentFoodId={food.id}
        foodName={food.foodName}
        foodDescription={food.foodDescription}
        foodImage={food.foodImage}
        deleteDish={deleteDish}
        updateDishWithForm={updateDishWithForm}
      />
    )
  })

  return (
    <div className='main-container'>
      <Navbar />
      <Body 
      dishElements={dishElements}
      Forms={Forms}
      createNewFood={createNewFood}
      showUpdateForm={showUpdateForm}
      />
    </div>
  )
}

export default App
