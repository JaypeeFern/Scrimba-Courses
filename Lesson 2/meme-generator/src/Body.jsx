import React from 'react';
import memesData from './data/memeData';

export default function Body() {

    // Create a state for the meme object
    const [meme, setMeme] = React.useState(({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }))

    // Create a state for the meme data
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        console.log('Component did mount')
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(memeData => setAllMemes(memeData))
    }, [meme.randomImage])

    // Create a function to get a random meme image
    function getMemeImage() {
        const memesArray = allMemes.data.memes // Get the memes array from the meme data
        const randomNumber = Math.floor(Math.random() * memesArray.length) // Get a random number
        setMeme(prevMeme => { // Set the state
            return {
                ...prevMeme, // Spread the previous state
                randomImage: memesArray[randomNumber].url // Set the random image to the random image url
            }
        })
    }

    function handleChange(event) {
        // Desctructure the event.target object
        const { name, value, checked, type } = event.target
        // Set the state
        setMeme(prevText => { // prevText is the previous state
            return {
                ...prevText, // Spread the previous state
                [name]: type === 'checkbox' ? checked : value // Set the value of the state to the value of the input
            }
        })
    }

    return (
        <div className="body-container">
            <form className="body--meme-generator">
                <div className="body--form-group">
                    <input value={meme.topText} name='topText' onChange={handleChange} id='top-text' className="body--text-input" type="text" placeholder=' Top' />
                    <input value={meme.bottomText} name='bottomText' onChange={handleChange} id='bottom-text' className="body--text-input" type="text" placeholder=' Bottom' />
                </div>
                <div className="body--button">
                    <input onClick={getMemeImage} type="button" value='Get a new meme Image  🖼' />
                </div>
                <div className="meme-container">
                    <img className="body--meme" src={meme.randomImage} />
                    <p className="body-top--text">{meme.topText}</p>
                    <p className="body-bottom--text">{meme.bottomText}</p>
                </div>
            </form>
        </div>
    )
}