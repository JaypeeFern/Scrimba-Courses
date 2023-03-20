import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pricing({getHostVanDetail}) {

    const hostVanDetail = getHostVanDetail(useParams().id);
    return (
        <div className='pricing--container'>
            <div className='pricing--wrapper'>
                <span className='pricing--header'><b>${hostVanDetail.price}</b><small>/day</small></span>
            </div>
        </div>
    )
}