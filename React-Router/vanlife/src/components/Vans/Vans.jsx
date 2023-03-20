import React from "react";
import { Link } from "react-router-dom";

export default function Vans({ vanData }) {

    const types = {
        type: {
            simple: '#E17654',
            luxury: '#161616',
            rugged: '#115E59'
        }
    }

    const typeEntries = Object.entries(types.type)

    const VanItems = vanData.map(item => (
        <Link to={`/vans/${item.id}`} key={item.id} className="van--item">
            <div className="van--img-container">
                <img className="van--img" src={item.imageUrl} />
            </div>
            <div className="van--info">
                <div className="van--name">{item.name}</div>
                <div className="van--rate">${item.price}</div>
                {typeEntries.map(([key, value]) => {
                    if (key === item.type) {
                        return (
                            <div key={item.id} className="van--type" style={{ backgroundColor: value }}>
                                {item.type}
                            </div>
                        )
                    }
                })}
                <span className="day">/day</span>
            </div>
        </Link>
    ))

    return (
        <div className="van--container">
            <div className="van--wrapper">
                <div className="van--options">
                    <span className="van--options-title">Explore our van options</span>
                    <div className="van--options-choices">
                        <button>Simple</button>
                        <button>Luxury</button>
                        <button>Rugged</button>
                        <button>Clear filters</button>
                    </div>
                </div>
                <div className="van--list--container">
                    {VanItems}
                </div>
            </div>
        </div>
    )
}