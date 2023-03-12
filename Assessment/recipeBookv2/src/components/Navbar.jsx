import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar-style container-fluid p-2 d-flex justify-content-center'>
            <nav className="navbar fw-light w-100">
                <div className='container d-flex justify-content-between'>
                    {/* <div className='row'>
                        <div className='col-12 text-center'>
                            <span className="navbar-brand fs-2" href="#">Group XS</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className="navbar-brand fs-6" href="#">Assessment 1</span>
                        </div>
                    </div> */}
                    <img width='200px' src="https://www.groupxs.com/wp-content/uploads/2017/02/groupxs-logo.png"/>
                    <span>Assessment 1</span>
                </div>
            </nav>
        </div>
    )
}