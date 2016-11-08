import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

import Summary from './components/Summary';
import Quotes from './components/Quotes';

/*
 * TODO:
 * - sammenlikning med referanseindeks
 * - oppsummering for portefølje + individuelle fond (dag, uke, måned)
 * - teknisk analyse (løpende gjennomsnitt, bollinger bands, ..)
 */

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummary: true,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      showSummary: event.target.name === 'summary',
    });
  }

  render() {
    return (<div>
      <ButtonGroup bsSize="large">
        <Button name="summary" onClick={this.onButtonClick}>Summary</Button>
        <Button name="detailed" onClick={this.onButtonClick}>Detailed</Button>
      </ButtonGroup>

      {this.state.showSummary
        ? <Summary quotes={this.props.portfolio} />
        : <Quotes quotes={this.props.portfolio} /> }
    </div>);
  }
}

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    development: PropTypes.array.isRequired,
  })),
};

const mapStateToProps = state => Object.assign({}, state, {
  portfolio: state.portfolio,
});

export default connect(mapStateToProps)(Portfolio);
