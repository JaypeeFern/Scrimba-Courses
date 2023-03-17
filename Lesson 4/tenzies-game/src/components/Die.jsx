import React from 'react'

export default function Die({id, value, isHeld, holdDice}) {

    const style = {
        backgroundColor: isHeld ? '#59E391' : 'white'
    }

    return (
        <div onClick={() => holdDice(id)}  style={style} className='die'>{value}</div>
    )
}