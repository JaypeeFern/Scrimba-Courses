export default function Card({item: props}) {

    let badgeText 
    if (props.openSlots === 0){
        badgeText = 'SOLD OUT'
    }else if(props.location === 'Online'){
        badgeText = 'ONLINE'
    } 

    // console.log(props)

    return (
        <>
            <div className="--card-image">
                {badgeText && <div className="--card-badge">{badgeText}</div>}
                <img src={props.coverImg}></img>
                <div className="--card-stats">
                <img src="./src/assets/star.png" className="--card-star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="--card-stats-text">{props.title}</p>
            <p className="--card-stats-text"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    )
}