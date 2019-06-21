import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={`${process.env.PUBLIC_URL}/astronaut-icon.png`}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Astro logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Accueil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link >Création</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(
)(NavBar);