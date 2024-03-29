import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home--container'>
            <div className='home--wrapper'>
                <div className='home--content'>
                    <span className='home--title'>You got the travel plans, we got the travel vans.</span>
                    <span className='home--desc'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</span>
                    <Link to='/vans' className='home--btn'>Find your van</Link>
                </div>
            </div>
        </div>
    )
}
