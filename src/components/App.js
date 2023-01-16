import React from "react";
import AccountList from "./AccountList";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountList />
    </div>
  );
}

export default App;
