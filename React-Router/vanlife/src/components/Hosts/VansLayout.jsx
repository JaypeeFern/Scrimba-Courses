import React from "react";
import { Outlet, NavLink, Link, useLoaderData } from "react-router-dom";
import { getHostVansDetails } from "../../API";

export function loader({ params }) {
    return getHostVansDetails(params.id)
}

export default function VansLayout() {
 
    const hostVanDetail = useLoaderData();
    
    function OutletContext() {
        return <Outlet context={hostVanDetail} />;
      }

    return (
        <div className="hostVanDetails--container">
            <Link to='../vans' className="hostVanDetails--header">{'<- Back to all vans'}</Link>
            <div className="hostVanDetails--card">
                <div className="hostVanDetails--card-image-container">
                    <img className="hostVanDetails--card-image" src={hostVanDetail.imageUrl} />
                </div>
                <div className="hostVanDetails--card-details">
                    <span className="hostVanDetails--van-type">{hostVanDetail.type}</span>
                    <span className="hostVanDetails--van-name">{hostVanDetail.name}</span>
                    <span className="hostVanDetails--van-price"><b className="bold">{hostVanDetail.price}</b>/day</span>
                </div>
            </div>
            <div className="hostVanDetails--nav-container">
                <nav className="hostVanDetails--nav">
                    <NavLink end to={''}>Details</NavLink>
                    <NavLink to={`pricing`}>Pricing</NavLink>
                    <NavLink to={`photos`}>Photos</NavLink>
                </nav>
                {OutletContext()}
            </div>
        </div>
    )
}