import React from 'react';
import memesData from './data/memeData';

export default function Body() {

    // function topText() {
    //     const topText = document.getElementById('top-text').value;
    //     const topTextElement = document.querySelector('.body-top--text');
    //     topTextElement.innerHTML = topText;
    // }

    // function bottomText() {
    //     const bottomText = document.getElementById('bottom-text').value;
    //     const bottomTextElement = document.querySelector('.body-bottom--text');
    //     bottomTextElement.innerHTML = bottomText;
    // }

    // const [memeImage, setMemeImage] = React.useState("")
    // function randomMeme() {
    //     const memesArray = memeData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setMemeImage(memesArray[randomNumber].url)
    // }

    // const [topText, setTopText] = React.useState("")
    // const [bottomText, setBottomText] = React.useState("")
    // const [randomImage, setRandomImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    // const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    // function getMemeImage() {
    //     const memesArray = memeData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setRandomImage(memesArray[randomNumber].url)
    // }

    // function topText() {
    //     setMeme(prevMeme => {
    //         return {
    //             ...prevMeme,
    //             topText: document.getElementById('top-text').value
    //         }
    //     })
    // }

    // function bottomText() {
    //     setMeme(prevMeme => {
    //         return {
    //             ...prevMeme,
    //             bottomText: document.getElementById('bottom-text').value
    //         }
    //     })
    // }

    // Create a state for the meme object
    const [meme, setMeme] = React.useState(({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }))

    console.log(meme)

    // Create a state for the meme data
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // Create a function to get a random meme image
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes // Get the memes array from the meme data
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