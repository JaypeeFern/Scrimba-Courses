import React from 'react'
import {useOutletContext } from 'react-router-dom'

export default function Pricing() {
    const hostVanDetail = useOutletContext();
    return (
        <div className='pricing--container'>
            <div className='pricing--wrapper'>
                <span className='pricing--header'><b>${hostVanDetail.price}</b><small>/day</small></span>
            </div>
        </div>
    )
}