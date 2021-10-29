import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DetailUser from "./Components/DetailUser/DetailUser";
import CreateUser from "./Components/CreateUser/CreateUser";
import EditUser from "./Components/EditUser/EditUser";
import UserList from "./Components/UsersList/UserList";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/detail/:id/" component={DetailUser} />
        <Route path="/createUser/" component={CreateUser} />
        <Route path="/editUser/:id" component={EditUser} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
