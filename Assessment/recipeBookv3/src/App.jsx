import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
// import Footer from './components/Footer'
import Dish from './components/Dish'
import Forms from "./forms/Forms";
import { nanoid } from 'nanoid'
import { db } from './firebase/firebase'
import { doc, addDoc, getDocs, getDoc, deleteDoc, updateDoc, collection, serverTimestamp, query, where} from 'firebase/firestore'
import './styles.css'

function App() {

  const collectionRef = collection(db, "food")

  // Set the data to the state
  const [food, setFood] = React.useState([])

  // Create state for dish ID
  const [currentFoodId, setCurrentFoodId] = React.useState('')

  // Get the data from the database collection "food" in Firebase
  async function getData() {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setFood(documents);
      setCurrentFoodId(documents[0] ? documents[0].id : '');
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
    name: '',
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
      const randomIndex = Math.floor(Math.random() * data.photos.length);
      setImageUrl({
        url: data.photos[randomIndex].src.large,
        name: data.photos[randomIndex].alt
      });

    };
    fetchImage();
  }, [currentFoodId]);

  // Create a new dish
  // Add a dish to the database collection "food" in Firebase
  const createNewFood = async (event) => {
    event.preventDefault()
    if (food === "") return;

    // Add new document to Firestore and get its id

    const foodNameValue = event.target.foodName.value
    const foodDescriptionValue = event.target.foodDescription.value

    const docRef = await addDoc(collectionRef, {
      id: nanoid(),
      createdAt: serverTimestamp(),
      foodName: foodNameValue !== '' ? foodNameValue : imageUrl.name,
      foodDescription: foodDescriptionValue,
      foodImage: imageUrl.url
    });

    const newDocId = docRef.id;

    // Update state to trigger useEffect that will rerender the page showing the new data
    setFood([]);
    setCurrentFoodId(newDocId);
  };

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

  // Get Document ID from Firestore
  async function getDocumentId(id) {
    try {
      const collectionRef = collection(db, "food"); // Get the collection
      const q = query(collectionRef, where("id", "==", id)); // Query the collection
      const querySnapshot = await getDocs(q); // Get the query snapshot
      let docId;  // Declare a variable to store the document ID
      querySnapshot.forEach((doc) => { 
        docId = doc.id;
      });
      return docId;
    } catch (error) {
      console.error("Error finding document ID: ", error);
    }
  }

  // Delete a dish
  async function deleteFromFirestore(docId) {
    try {
      if (!docId) {
        throw new Error("Document ID is empty or undefined");
      }

      const collectionRef = collection(db, 'food'); // Get the collection
      const documentRef = doc(collectionRef, docId); // Get the document
      await deleteDoc(documentRef); // Delete the document
      console.log("Document successfully deleted!"); 
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

  // Update a dish
  async function updateDish(event, foodId) {
    event.preventDefault();
    let docId
    // Find the object with the matching ID
    const selectedFood = food.find((food) => food.id === foodId);
    if (selectedFood) {
      // Populate the form with the data from the selected object
      document.getElementById('currentFoodId').value = selectedFood.id;
      document.getElementById('foodName').value = selectedFood.foodName;
      document.getElementById('foodDescription').value = selectedFood.foodDescription;
  
      // Add an event listener to the form submit button
      document.getElementById('updateDish').addEventListener('click', async function (event) {
        event.preventDefault();

        // Get the form data 
        const foodId = document.getElementById('currentFoodId').value;
        const foodName = document.getElementById('foodName').value;
        const foodDescription = document.getElementById('foodDescription').value;

        // Get the document ID
        docId = await getDocumentId(foodId);

        // Update the document in Firestore
        try {
          const foodRef = doc(db, 'food', docId);
          await updateDoc(foodRef, {
            foodName: foodName,
            foodDescription: foodDescription
          })
          console.log("Document successfully updated!");
        } catch (error) {
          console.error("Error updating document: ", error);
        }

        // Update States
        getData()
        setShowAddForm(true)
        setShowUpdateForm(false);

      });

      document.getElementById('deleteDish').addEventListener('click', async function (event) {
        event.preventDefault()

        // Get the document ID
        docId = await getDocumentId(foodId);
        // Delete the document from Firestore
        deleteFromFirestore(docId)
        setShowAddForm(true)
        setShowUpdateForm(false);
        // Update States
        getData()

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
        currentFoodId={food.id}
        dishElements={dishElements}
        Forms={Forms}
        showUpdateForm={showUpdateForm}
        showAddForm={showAddForm}
        handleShowAddForm={handleShowAddForm}
        createNewFood={createNewFood}
      />
      {/* <Footer/> */}
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


  // async function handleDeleteDish(event, docId) {
  //   event.preventDefault()
  //   try {
  //     await deleteFromFirestore("food", docId);
  //     console.log("Document successfully deleted!");
  //   } catch (error) {
  //     console.error("Error deleting document: ", error);
  //   }
  // }