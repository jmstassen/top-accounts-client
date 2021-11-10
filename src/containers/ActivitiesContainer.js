import React, { Component } from "react";
import ActivityInput from "../components/ActivityInput";
import Activities from "../components/Activities"

class ActivitiesContainer extends Component {
  
  render() {
    return <div>
      <p>Activities</p>
      <ActivityInput account={this.props.account}/>
      <Activities activities={this.props.account.activities}/>
    </div>  
  }
}

export default ActivitiesContainer