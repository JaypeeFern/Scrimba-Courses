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

    const [meme, setMeme] = React.useState(({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }))

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        })
    }

    return (
        <div className="body-container">
            <form className="body--meme-generator">
                <div className="body--form-group">
                    <input className="body--text-input" type="text" placeholder=' Top' />
                    <input className="body--text-input" type="text" placeholder=' Bottom' />
                </div>
                <div className="body--button">
                    <input onClick={getMemeImage} type="button" value='Get a new meme Image  🖼' />
                </div>
                <div className="meme-container">
                    <img className="body--meme" src={meme.randomImage}/>
                    <p className="body-top--text">SHUT UP</p>
                    <p className="body-bottom--text">AND TAKE MY MONEY</p>
                </div>
            </form>
        </div>
    )
}