import React from "react";
import AccountName from "../components/AccountName";

function SummaryContainer(props) {
  return (
    <div>
      <AccountName account={props.account}/>
    </div>
  ) 
}

export default SummaryContainer