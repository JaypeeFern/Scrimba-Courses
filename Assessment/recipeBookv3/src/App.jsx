import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Dish from './components/Dish'
import Forms from "./forms/Forms";
import { nanoid } from 'nanoid'
import { db } from './firebase/firebase'
import { addDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore'
import './styles.css'

function App() {

  const collectionRef = collection(db, "food")

  // Set the data to the state
  const [food, setFood] = React.useState([])

  // Create state for dish ID
  const [currentFoodId, setCurrentFoodId] = React.useState((food[0] && food[0].id) || '')

  // Get the data from the database collection "food" in Firebase
  async function getData() {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setFood(documents);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  }

  React.useEffect(() => {
    getData();
  }, [currentFoodId]);

  // Random Food Image
  const [imageUrl, setImageUrl] = React.useState({
    url: '',
    name: ''
  });

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
      // console.log(data);
      const randomIndex = Math.floor(Math.random() * data.photos.length);
      // setImageUrl(data.photos[randomIndex].src.large);
      setImageUrl({
        url: data.photos[randomIndex].src.large,
        name: data.photos[randomIndex].alt
      });

    };
    fetchImage();
  }, [currentFoodId]);

  // Create a new dish
  function createNewFood(event) {
    event.preventDefault()
    const newFood = { // Create a new dish object
      id: nanoid(),
      foodName: event.target.foodName.value !== '' ? event.target.foodName.value : imageUrl.name,
      foodDescription: event.target.foodDescription.value,
      foodImage: imageUrl.url
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

  // IMPORTANT!!!!!! THIS FUNCTION HAS NOT BEEN TESTED YET
  // Add a dish to the database collection "food" in Firebase
  const fireBaseHandleSubmit = async (e) => {
    e.preventDefault()
    if (food === "") return;

    await addDoc(collectionRef, {
      id: nanoid(),
      createdAt: serverTimestamp(),
      foodName: '',
      foodDescription: '',
      foodImage: ''
    })
    setFood("")
  }
  // IMPORTANT!!!!!! THIS FUNCTION HAS NOT BEEN TESTED YET

  // Delete a dish
  function deleteDish(event, foodId) {
    event.preventDefault()
    // Filter the dish array and return a new array without the dish that has the same ID as the dish ID that was passed in
    setFood(prevFoods => prevFoods.filter(prevFood => prevFood.id !== foodId))
  }

  // Create state for the forms to show or hide
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [showUpdateForm, setShowUpdateForm] = React.useState(false);

  // Show the add form
  function handleShowAddForm(event) {
    event.preventDefault()
    if (showAddForm === false && showUpdateForm === true) {
      setShowAddForm(false)
      setShowUpdateForm(false)
    } else {
      setShowAddForm(prevState => !prevState);
    }
  }

  // Show the update form
  function handleShowUpdateForm(event) {
    event.preventDefault()
    setShowAddForm(false)
    setShowUpdateForm(true)
  }

  // Update a dish
  function updateDish(event, foodId) {
    event.preventDefault()
    // Find the object with the matching ID
    const selectedFood = food.find(food => food.id === foodId);
    if (selectedFood) {
      // Populate the form with the data from the selected object
      document.getElementById('currentFoodId').value = selectedFood.id;
      document.getElementById('foodName').value = selectedFood.foodName;
      document.getElementById('foodDescription').value = selectedFood.foodDescription;

      // Add an event listener to the form submit button
      document.getElementById('updateDish').addEventListener('click', function (event) {

        event.preventDefault();

        // Get the new values from the form
        const updatedFood = {
          foodId: document.getElementById('currentFoodId').value,
          foodName: document.getElementById('foodName').value,
          foodDescription: document.getElementById('foodDescription').value,
        };

        // Find the index of the object with the matching ID
        const index = food.findIndex(food => food.id === updatedFood.foodId);

        if (index >= 0) {
          // Modify the existing object with the new values
          food[index].foodName = updatedFood.foodName;
          food[index].foodDescription = updatedFood.foodDescription;

          // Update the data in local storage
          localStorage.setItem('food', JSON.stringify(food));

          // Update the state
          setFood(food);
          setShowAddForm(true)
          setShowUpdateForm(false);

          // console.log(food[index]);
        } else {
          console.log(`Food with ID ${updatedFood.foodId} not found.`);
        }

      });

      document.getElementById('deleteDish').addEventListener('click', function (event) {
        event.preventDefault();
        deleteDish(event, foodId);
        setShowAddForm(true)
        setShowUpdateForm(false);
      });

    } else {
      console.log(`Food with ID ${foodId} not found.`);
    }
  }

  // Update a dish with the form showing after 200ms delay to allow the form to show first
  function updateDishWithForm(event, foodId) {
    handleShowUpdateForm(event);
    setTimeout(() => {
      updateDish(event, foodId);
    }, 200)
  }

  // Modal functions
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFoodId, setselectedFoodId] = React.useState(false)

  function handleModalClose() {
    setShowModal(false)
  }

  function handleModalShow(foodId) {
    setShowModal(true)
    setselectedFoodId(foodId)
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

        handleModalClose={handleModalClose}
        handleModalShow={handleModalShow}
        showModal={showModal}
        selectedFoodId={selectedFoodId}
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
        showAddForm={showAddForm}
        deleteDish={deleteDish}
        handleShowAddForm={handleShowAddForm}
        fireBaseHandleSubmit={fireBaseHandleSubmit}
      />
    </div>
  )
}

export default App


  // Show the add form
  // function handleShowAddForm(event) {
  //   event.preventDefault()
  //   showAddForm(true);
  //   setShowUpdateForm(false);
  // }
