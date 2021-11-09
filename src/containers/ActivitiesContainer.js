import React, { Component } from "react";
import { connect } from "react-redux";
import ActivityInput from "../components/ActivityInput";
import Activities from "../components/Activities"

class ActivitiesContainer extends Component {

  render() {
    return <div>
      <p>Activities</p>
      <ActivityInput />
      <Activities activities={this.props.account.activities}/>
    </div>
  }

}

// const mapStateToProps = state => ({
//    current_account: state.current_account
// })

export default ActivitiesContainer