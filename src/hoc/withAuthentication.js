import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const withAuthentication = () => (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      
      if (!this.props.auth.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return this.props.auth.isAuthenticated ? <Component {...this.props} /> : null;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(WithAuthentication);
};

export default withAuthentication;