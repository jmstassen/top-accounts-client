import React, { Component } from "react";
import ActivityInput from "../components/ActivityInput";
import Activities from "../components/Activities"

class ActivitiesContainer extends Component {

  render() {
    return <div>
      <ActivityInput account={this.props.account && this.props.account}/>
      <br></br>
      <hr>
      </hr><br></br>
      <h3>Activity Log:</h3><br></br>
      <Activities activities={this.props.account && this.props.account.activities}/>
    </div>
  }
}

export default ActivitiesContainer