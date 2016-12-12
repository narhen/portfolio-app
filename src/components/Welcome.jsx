import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Login } from './login/Login';

const Welcome = ({ authenticated, user }) => {
  const welcomeOrLogin = authenticated ? (
    <h1>Welcome, {user.name}</h1>
  ) : (
    <h1>Please <Login /></h1>
  );

  return (
    <div>
      {welcomeOrLogin}
    </div>
  );
};

Welcome.propTypes = {
  user: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => Object.assign({}, {
  user: state.user,
  authenticated: state.authenticated,
});

export default connect(mapStateToProps)(Welcome);
