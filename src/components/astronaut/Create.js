import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Create extends Component {
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
)(Create);