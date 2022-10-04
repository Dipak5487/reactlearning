import React from 'react'
import { Link } from 'react-router-dom'
import NavBars from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const NavBar = () => {
    return (
        <NavBars bg="info"  expand="lg">
            <Container fluid>
                <NavBars.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/articles">Articles</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link> <Link to="/contectUs">Contact Us</Link></Nav.Link>
                    </Nav>
                </NavBars.Collapse>
            </Container>
        </NavBars>

    )
}

export default NavBar
