import React, {useState, useEffect} from"react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
 
function AccountContainer() {
  const [transactions,setTransaction]=useState ([])

  //manage user search
  const [ search, setSearch] = useState(""); 

  useEffect (() => {
    fetch(" http://localhost:8001/transactions")
    .then( res=> res.json ())
    .then ((data) => setTransaction (data)) //console. log (data)
  } , [ ]) // empty dependency array

    //Render new transaction, using the spread operator not to mutate the original array
    function updatedTransactions(newTransactions) {
      const updatedTransactionsArray = [...transactions, newTransactions]
      setTransaction(updatedTransactionsArray)
     }
  
  return (
    <div>
       <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm newData={updatedTransactions}  />
      {/* // destructuring a property it will be re used
      // account=parent to transactionlist */}
       <TransactionsList transactions={transactions} setTransaction={setTransaction} search={search} />
    </div>
    
  );
}

export default AccountContainer;
