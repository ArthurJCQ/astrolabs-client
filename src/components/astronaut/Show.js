import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../templates/Navbar';
import Alert from 'react-bootstrap/Alert'

class Show extends Component {
    static propTypes = {
    };

    constructor() {
    super();
    }

    componentDidMount() {

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
        </div>
    );
    }
}
const mapStateToProps = state => {
};
const mapDispatchToProps = dispatch => ({
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show);