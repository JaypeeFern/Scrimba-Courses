import React from 'react'

export default function Dashboard() {
    return (
        <div className='dashboard--container'>
            <div className='dashboard--wrapper'>
                <div className='dashboard--header'>
                    <span className='header-title'>Welcome!</span>
                    <span className='header-income'>Income last <u>30 days</u></span>
                    <span className='header-details'>Details</span>
                    <span className='header-amount'>$2,260</span>
                </div>
                <div className='dashboard--review-score'>
                    <span className='review-score-text'>Review Score</span>
                    <span className='review-score-rating'>
                        <svg id='svg' width="20" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73016 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36478 11.7521 5.18728 11.221 4.76428 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" />
                        </svg>
                        5.0<span className='normal'>/5</span>
                    </span>
                    <span className='review-score-details'>Details</span>
                </div>
                <div className='dashboard--listed-vans'>
                    <div className='listed-vans-header'>
                        <span className='listed-vans-text'>Your listed vans</span>
                        <span className='listed-vans-option'>View all</span>
                    </div>
                    <div className='listed-vans-item'>
                        <div className='listed-vans-item--image'></div>
                        <span className='listed-vans-item--van'>Modest Explorer</span>
                        <span className='listed-vans-item--price'>$60/day</span>
                        <span className='listed-vans-item--edit'>Edit</span>
                    </div>
                </div>
            </div>
        </div>

    )
}