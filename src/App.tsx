import React from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/list" exact>
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
