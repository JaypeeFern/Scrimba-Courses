import React from "react";
import { useParams, Outlet, NavLink, Link } from "react-router-dom";

export default function VansLayout({useHostVanDetail}) {

    const hostVanDetail = useHostVanDetail(useParams().id);

    return (
        <div className="hostVanDetails--container">
            <Link to='/host/vans' className="hostVanDetails--header">{'<- Back to all vans'}</Link>
            <div className="hostVanDetails--card">
                <div className="hostVanDetails--card-image-container">
                    <img className="hostVanDetails--card-image" src={hostVanDetail.imageUrl} alt={hostVanDetail.name} />
                </div>
                <div className="hostVanDetails--card-details">
                    <span className="hostVanDetails--van-type">{hostVanDetail.type}</span>
                    <span className="hostVanDetails--van-name">{hostVanDetail.name}</span>
                    <span className="hostVanDetails--van-price"><b className="bold">${hostVanDetail.price}</b>/day</span>
                </div>
            </div>
            <div className="hostVanDetails--nav-container">
                <nav className="hostVanDetails--nav">
                    <NavLink end to={''}>Details</NavLink>
                    <NavLink to={`pricing`}>Pricing</NavLink>
                    <NavLink to={`photos`}>Photos</NavLink>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}