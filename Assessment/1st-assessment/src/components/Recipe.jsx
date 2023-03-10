import React from 'react'

export default function Recipe(props) {
    return (
        <div className="recipe-container">
            <img className='foodImage' src={props.foodImage}/>
            <span className="recipeName">{props.recipeName}</span>
        </div>
    )
}