import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import SummaryContainer from './containers/SummaryContainer';
import ObjectivesContainer from './containers/ObjectivesContainer';
import AccountsContainer from './containers/AccountsContainer';
import ActivitiesContainer from './containers/ActivitiesContainer';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="summary-container">
          <SummaryContainer account={this.props.current_account} />
        </div>
        <div className="objectives-container">
          <ObjectivesContainer account={this.props.current_account} />
        </div>
        <div className="accounts-container">
          <AccountsContainer />
        </div>
        <div className="activity-container">
          <ActivitiesContainer account={this.props.current_account} />
        </div>
      </div>
    );
  }
}

export default connect( )(App);