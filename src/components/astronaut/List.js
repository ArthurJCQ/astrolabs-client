import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { list } from '../../actions/astronaut/list';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import NavBar from '../templates/Navbar';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';

class List extends Component {
    static propTypes = {
        retrieved: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        list: PropTypes.func.isRequired
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.list();
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.props.loading &&
                    <Alert variant="success">LOADING</Alert>
                }
                {this.props.error &&
                    <Alert variant="danger">ERROR: {this.props.error}</Alert>
                }
                <CardDeck style={{margin: "50px"}}>
                    {this.props.retrieved &&
                        this.props.retrieved.map(item => (
                            <Col md={4} key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src="astronaut.png" />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {`Cet astronaute a ${item.age} ans,
                                            il vient de la planète ${item.planet}
                                            et a gagné au total ${item.score} point(s).`}
                                        </Card.Text>
                                        <LinkContainer to={`/show/${item.id}`}>
                                            <Button variant="primary">Voir l'astronaute</Button>
                                        </LinkContainer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </CardDeck>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {
        retrieved,
        loading,
        error
    } = state.astronaut.list;
    return { retrieved, loading, error };
};
const mapDispatchToProps = dispatch => ({
    list: () => dispatch(list())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);