import React from "react";
import { Link } from 'react-router-dom'

export default function HostVans({ hostVanData }) {

    const HostVanItems = hostVanData.map(item => (
        <Link key={item.id} to={item.id} className="hostVans--item">
            <div className="hostVans--item-image-container">
                <img className="hostVans--item-image" src={item.imageUrl} />
            </div>
            <div className="hostVans--item-details">
                <span className="hostVans--item-name">{item.name}</span>
                <span className="hostVans--item-price">${item.price}/day</span>
            </div>
        </Link>
    ))

    return (
        <div className="hostVans--container">
            <h1 className="hostVans--header">Your Listed Vans</h1>
            <div className="hostVans--list">
                {HostVanItems}
            </div>
        </div>
    )
}