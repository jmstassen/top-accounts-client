import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "./actions/accountActions";
import AccountsList from './components/AccountsList';
import AccountInput from './components/AccountInput';
import SummaryContainer from './containers/SummaryContainer';
import ObjectivesContainer from './containers/ObjectivesContainer';
import RightColumnContainer from './containers/RightColumnContainer';
import ActivitiesContainer from './containers/ActivitiesContainer';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAccounts();
  }

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
          <RightColumnContainer accounts={this.props.accounts} />
        </div>
        <div className="activity-container">
          <ActivitiesContainer account={this.props.current_account} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);