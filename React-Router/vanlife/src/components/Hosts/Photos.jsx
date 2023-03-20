import React from 'react'
import { useParams } from 'react-router-dom'
export default function Photos({getHostVanDetail}) {

    const hostVanDetail = getHostVanDetail(useParams().id);
    return (
        <div className='photos--container'>
            <div className='photos--wrapper'>
                <img src={hostVanDetail.imageUrl}/>
            </div>
        </div>
    )
}