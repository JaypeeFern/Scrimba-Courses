import React from 'react'

export default function About() {
    return (
        <div className='about--container'>
            <div className='about--wrapper'>
                <div className='about--img'>
                    <img src='src/assets/about.png' alt='about' />
                </div>
                <div className='about--body'>
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className='about--footer'>
                    <h1>Your destination is waiting. Your van is ready.</h1>
                    <button>Explore our vans</button>
                </div>
            </div>
        </div>
    )
}