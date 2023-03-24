import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../API";

export function loader({ params }) {
    return getVans(params.id)

}

export default function VanDetails() {

    const vanDetails = useLoaderData()
    const location = useLocation()

    return (
        <div className="van--details-container">
            <div className="van--details-wrapper">
                <Link className="returntoVans" to={`./..?${location.state?.search || ''}`} relative="path">{`<- Back to ${location.state.search ? vanDetails.type : 'all'} vans`}</Link>
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