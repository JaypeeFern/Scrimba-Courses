import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetails() {

    const [vanDetails, setVanDetails] = React.useState([])
    const vanId = useParams();
    React.useEffect(() => {
        fetch(`/api/vans/${vanId.id}`)
            .then(response => response.json())
            .then(data => {
                setVanDetails(data.vans)
            })
    }, [])

    return (
        <div className="van--details-container">
            <div className="van--details-wrapper">
                <Link className="returntoVans" to='/vans'>{`<- Back to all vans`}</Link>
                <div className="van--details-img-container">
                    <img className="van--details-img" src={vanDetails.imageUrl} />
                </div>
                <div className="van--details-info">
                    <span className="van--details-type">{vanDetails.type}</span>
                    <span className="van--details-name">{vanDetails.name}</span>
                    <span className="van--details-price">${vanDetails.price}/day</span>
                    <span className="van--details-description">{vanDetails.description}</span>
                    <button className="van--details-rent">Rent this van</button>
                </div>
            </div>
        </div>
    )
}