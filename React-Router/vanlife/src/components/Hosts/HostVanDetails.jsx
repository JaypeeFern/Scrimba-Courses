import React from "react";
import {useOutletContext} from "react-router-dom";

export default function HostVanDetails() {
    const hostVanDetail = useOutletContext();
    return (
        <div className="hostVanDetails--nav-content">
            <span className="hostVanName"><b>Name:</b> {hostVanDetail.name}</span>
            <span className="hostVanType"><b>Category:</b> {hostVanDetail.type}</span>
            <span className="hostVanDesc"><b>Description:</b> {hostVanDetail.description}</span>
            <span className="hostVanVisibility"><b>Visiblity:</b> Public</span>
        </div>
    )
}
