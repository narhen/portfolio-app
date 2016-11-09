import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

import Summary from './components/Summary';
import Quotes from './components/Quotes';
import Highchart from './components/Highchart';

/*
 * TODO:
 * - sammenlikning med referanseindeks
 * - oppsummering for portefølje + individuelle fond (dag, uke, måned)
 * - teknisk analyse (løpende gjennomsnitt, bollinger bands, ..)
 */

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.selectDataset = this.selectDataset.bind(this);

    const datasetSelector = 'normalized';
    this.state = {
      showSummary: true,
      getDataSet: this.selectDataset(datasetSelector),
      subtitle: datasetSelector,
      unit: '%',
    };
  }

  onButtonClick(event) {
    const datasetSelector = event.target.name === 'summary' ? 'normalized' : 'monetary';
    this.setState({
      showSummary: event.target.name === 'summary',
      getDataSet: this.selectDataset(datasetSelector),
      unit: event.target.name === 'summary' ? '%' : 'kr',
      subtitle: datasetSelector,
    });
  }

  selectDataset(selector) {
    return () => this.props.portfolio.map((invensment) => {
      const shit = {
        name: invensment.name,
        data: invensment.development.map(currentDay => [Date.parse(currentDay.date), currentDay[selector]]),
      };
      return shit;
    });
  }

  render() {
    return (<div>
      <ButtonGroup bsSize="large">
        <Button name="summary" onClick={this.onButtonClick}>Summary</Button>
        <Button name="detailed" onClick={this.onButtonClick}>Detailed</Button>
      </ButtonGroup>

      <Highchart title="Portfolio" unit={this.state.unit} subtitle={this.state.subtitle} investments={this.state.getDataSet()} />;
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
