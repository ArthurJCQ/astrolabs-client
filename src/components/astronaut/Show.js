import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/astronaut/show';
import NavBar from '../templates/Navbar';
import Alert from 'react-bootstrap/Alert';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Show extends Component {
    static propTypes = {
        retrieved: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        retrieve: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.retrieve(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
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
            {this.props.retrieved &&
                <Jumbotron style={{marginTop: "50px"}}>
                    <h1>{`${this.props.retrieved.name} - ${this.props.retrieved.age} ans`}</h1>
                    <hr/>
                    <h3><b>Informations</b></h3>
                    <ul>
                        <li><b>Score :</b> {this.props.retrieved.score}</li>
                        <li><b>Planet :</b> {this.props.retrieved.planet}</li>
                    </ul>
                </Jumbotron>
            }
            </Container>
        </div>
    );
    }
}
const mapStateToProps = state => {
    const {
        retrieved,
        loading,
        error
    } = state.astronaut.show;
    return { retrieved, loading, error };
};
const mapDispatchToProps = dispatch => ({
    retrieve: id => dispatch(retrieve(id)),
    reset: () => dispatch(reset())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show);