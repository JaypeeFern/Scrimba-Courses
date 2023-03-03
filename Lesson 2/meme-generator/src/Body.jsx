export default function Body() {
    return (
        <div className="body-container">
            <form className="body--meme-generator">
                <div className="body--form-group">
                    <input className="body--text-input" type="text" value='Shut Up' />
                    <input className="body--text-input" type="text" value='and take my money' />
                </div>
                <div className="body--button">
                    <input type="button" value='Get a new meme Image  🖼' />
                </div>
                <div className="meme-container">
                    <img className="body--meme" src="https://i.imgflip.com/1bij.jpg" />
                    <p className="body-top--text">SHUT UP</p>
                    <p className="body-bottom--text">AND TAKE MY MONEY</p>
                </div>
            </form>
        </div>
    )
}