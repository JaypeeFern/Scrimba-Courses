import React from 'react'
import {useOutletContext } from 'react-router-dom'

export default function Photos() {
    const [hostVanDetail, setHostVanDetail] = useOutletContext();
    return (
        <div className='photos--container'>
            <div className='photos--wrapper'>
                <img src={hostVanDetail.imageUrl}/>
            </div>
        </div>
    )
}