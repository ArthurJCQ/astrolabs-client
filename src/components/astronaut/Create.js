import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { create } from '../../actions/astronaut/create';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../templates/Navbar';

class Create extends Component {
    static propTypes = {
        error: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        created: PropTypes.object,
        create: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            planet: 'Duck Invaders',
            score: ''
        }
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();

        const values = this.state;

        console.log(this.state);

        this.props.create(values);
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
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 style={{textAlign: "center", marginTop: "50px"}}>Créez votre astronaute !</h1>
                    <hr />
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre nom" onChange={e => this.setState({name: e.target.value})} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Âge</Form.Label>
                            <Form.Control type="number" placeholder="Entrez votre âge" onChange={e => this.setState({age: e.target.value})} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Score</Form.Label>
                            <Form.Control type="number" placeholder="Entrez votre score" onChange={e => this.setState({score: e.target.value})} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Planète</Form.Label>
                            <Form.Control as="select" onChange={e => this.setState({planet: e.target.value})} required>
                                <option>Duck Invaders</option>
                                <option>Donut Factory</option>
                                <option>Raccoons of Asgard</option>
                                <option>Schizo Cats</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Créer !
                        </Button>
                    </Form>
                </Col>
            </Container>

        </div>
    );
    }
}
const mapStateToProps = state => {
    const { created, error, loading } = state.astronaut.create;
    return { created, error, loading };
};
const mapDispatchToProps = dispatch => ({
    create: values => dispatch(create(values))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);