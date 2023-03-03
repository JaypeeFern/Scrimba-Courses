export default function Info() {
    return (
        <>
            <img className='--info-avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />
            <div className="--info-details-container">
                <h1 className="--info-name">John Paul Fernandez</h1>
                <h4 className="--info-occupation">Aspiring Developer</h4>
                <h5 className="--info-website">johnpaul.website</h5>
            </div>
            <div className="--info-button-container">
                <button type="button" className="--info-email">
                    Email
                </button>
                <button type="button" className="--info-linkedin">LinkedIn</button>
            </div>
        </>
    )
}