import React, { Component } from "react";
import { connect } from "react-redux";
import AccountName from "../components/AccountName";

function SummaryContainer(props) {
    return (
      <div>
        <AccountName account={props.account}/>
      </div>
  ) 
}

export default SummaryContainer