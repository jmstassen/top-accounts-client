export const fetchAccounts = () => {
  return(dispatch) => {
    dispatch({ type: "LOADING_ACCOUNTS" });
    fetch("http://localhost:3000/accounts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_ACCOUNTS", accounts: responseJSON})
      });
  };
};