import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Login } from './login/Login';
import { UserMenu } from './UserMenu';

const Navigation = ({ authenticated, user }) => {
  const authenticatedLinks = authenticated ? (<div>
    <li className="navBarLeftAlign"><Link to={'/portfolio'}>Summary</Link></li>
    <li className="navBarLeftAlign"><Link to={'/portfolio/history'}>History</Link></li>
    <li className="navBarLeftAlign"><Link to={'/portfolio/deposits'}>Deposits</Link></li>
  </div>) : null;

  return (<header>
    <div className="nav">
      <ul>
        <li className="navBarLeftAlign"><Link to={'/'}>Home</Link></li>
        {authenticatedLinks}
        <li className="navBarRightAlign">{authenticated ? <UserMenu user={user} /> : <Login />}</li>
      </ul>
    </div>
  </header>);
};

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => Object.assign({}, {
  authenticated: state.authenticated,
  user: state.user,
});

export default connect(mapStateToProps)(Navigation);
