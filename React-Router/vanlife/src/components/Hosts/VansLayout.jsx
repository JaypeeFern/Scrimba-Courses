import React from "react";
import { useParams, Outlet, NavLink, Link } from "react-router-dom";

export default function VansLayout() {

    const [hostVanDetail, setHostVanDetail] = React.useState([])
    const hostVanId = useParams();
    React.useEffect(() => {
        fetch(`/api/host/vans/${hostVanId.id}`)
            .then(response => response.json())
            .then(data => {
                setHostVanDetail(data.vans[0])
            })
    }, [])

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
                    <Link to={`pricing`}>Pricing</Link>
                    <Link to={`photos`}>Photos</Link>
                </nav>
                <div className="hostVanDetails--nav-content">
                    <span className="hostVanName"><b>Name:</b> {hostVanDetail.name}</span>
                    <span className="hostVanType"><b>Category:</b> {hostVanDetail.type}</span>
                    <span className="hostVanDesc"><b>Description:</b> {hostVanDetail.description}</span>
                    <span className="hostVanVisibility"><b>Visiblity:</b> Public</span>
                </div>
            </div>
        </div>
    )
}