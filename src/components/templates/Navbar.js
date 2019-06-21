import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src="astronaut-icon.png"
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

const mapStateToProps = state => {
};
const mapDispatchToProps = dispatch => ({
});
export default connect(
)(NavBar);