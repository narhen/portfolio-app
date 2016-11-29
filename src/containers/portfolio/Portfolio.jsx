import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { normalize, monetary } from '../../utils/metrics';

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
    this.onViewButtonClick = this.onViewButtonClick.bind(this);
    this.selectDataset = this.selectDataset.bind(this);
    this.onPortfolioButtonClick = this.onPortfolioButtonClick.bind(this);

    const datasetSelector = normalize;
    this.state = {
      showSummary: true,
      getDataSet: this.selectDataset(datasetSelector),
      subtitle: datasetSelector.name,
      unit: '%',
      activeButtons: new Set(['Portfolio']),
    };
  }

  onViewButtonClick(event) {
    const showSummary = event.target.name === 'summary';
    const datasetSelector = showSummary ? normalize : monetary;
    this.setState(Object.assign({}, this.state, {
      getDataSet: this.selectDataset(datasetSelector),
      showSummary,
      unit: event.target.name === 'summary' ? '%' : 'kr',
      subtitle: datasetSelector.name,
    }));
  }

  onPortfolioButtonClick(event) {
    const target = event.target;
    const activeButtons = this.state.activeButtons;
    if (activeButtons.has(target.name)) {
      activeButtons.delete(target.name);
    } else {
      activeButtons.add(target.name);
    }
    this.setState(Object.assign({}, this.state, { activeButtons }));
  }

  selectDataset(selector) {
    return () => this.props.portfolio.map((investment) => {
      const shit = {
        name: investment.name,
        data: selector(investment),
      };
      return shit;
    }).filter(dataset => this.state.activeButtons.has(dataset.name));
  }

  render() {
    const buttonIsActive = name => this.state.activeButtons.has(name);
    const portfolioComponents = (<ButtonGroup>
      {this.props.portfolio.map(component =>
        <Button
          key={component.name}
          bsStyle="primary"
          name={component.name}
          onClick={this.onPortfolioButtonClick}
          active={buttonIsActive(component.name)}
        >
          {component.ticker || component.name}
        </Button>)}
    </ButtonGroup>);

    return (<div>
      <ButtonGroup bsSize="large">
        <Button name="summary" onClick={this.onViewButtonClick} active={this.state.showSummary}>Summary</Button>
        <Button name="detailed" onClick={this.onViewButtonClick} active={!this.state.showSummary}>Detailed</Button>
      </ButtonGroup>
      <Highchart title="Portfolio" unit={this.state.unit} subtitle={this.state.subtitle} investments={this.state.getDataSet()} />
      <div>{portfolioComponents}</div>
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
