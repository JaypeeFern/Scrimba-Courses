import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar(){
    return(
        <Navbar bg='light' expand='md'>
            <Container>
                <Navbar.Brand href=''>
                    <img src='./src/assets/icon.png' className='me-2' width='40px'></img>
                    <span className='fw-light'>React-Bootstrap</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href=''>Pricing</Nav.Link>
                        <Nav.Link href=''>About</Nav.Link>
                        <Nav.Link href=''>Contact</Nav.Link>
                        <NavDropdown title='More' id='basic-nav-dropdown'>
                            <NavDropdown.Item href=''>1</NavDropdown.Item>
                            <NavDropdown.Item href=''>2</NavDropdown.Item>
                            <NavDropdown.Item href=''>3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar