import React from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <LoginPage />
          </Route>
          <Route path="/list"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
