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
        <div className="container-card">
          <SummaryContainer account={this.props.current_account} />
        </div>
        <div className="container-card">
          <ObjectivesContainer account={this.props.current_account} />
        </div>
        <div className="right-column-card">
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