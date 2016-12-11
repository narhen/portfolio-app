import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { initializeSession } from './actions';

class SessionInitializer extends React.Component {
  componentWillMount() {
    const { dispatch, params: { sessiontoken } } = this.props;
    dispatch(initializeSession(sessiontoken)).then(() => dispatch(replace('/portfolio')));
  }

  render() {
    return <div />;
  }
}

SessionInitializer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    sessiontoken: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(state => state)(SessionInitializer);
