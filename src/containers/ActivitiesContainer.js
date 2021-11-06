import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from "../components/Activity";

class ActivitiesContainer extends Component {

  render() {
    return <div>
      <p>Activities</p>
    </div>
  }

}

const mapStateToProps = state => ({
   current_account: state.current_account
})

export default connect(mapStateToProps, null)(ActivitiesContainer)