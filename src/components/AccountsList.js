import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../actions/accountActions'
import { connect } from 'react-redux';

const AccountsList = (props) => {

  const handleDelete = (account) => {
    var result = window.confirm("Are you sure you want to delete this Account?");
    if (result === true) {
      props.deleteAccount(account.id);
    }
  }

  return (
    <div>
      <table><tbody>
      {props.accounts.map(account => 
        <tr key={account.id}>
            <td className="account"><Link to={`/accounts/${account.id}`}>{account.account_name}</Link></td><td className="account"><button onClick={() => handleDelete(account)}>delete</button></td><td className="account"><Link to={`/accounts/${account.id}/edit`}>edit</Link></td>
        </tr>
      )}</tbody>
      </table>
    </div>
  )
}

export default connect(null, { deleteAccount })(AccountsList)