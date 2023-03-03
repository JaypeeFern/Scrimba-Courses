import './vendors/style.css'

function Header() {
    return (
        <div>
            <header>
                <nav className='nav'>
                    <img className='img' src="./src/assets/icon.png"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header