import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Profile from "./Profile";
import Event from "./Event";
import Shop from "./Shop";
import ResetStyles from "./theme/ResetStyles";
import GlobalStyles from "./theme/GlobalStyles";

// for github env
const baseName = process.env.NODE_ENV === "production" ? "/IPATH" : "";

function App() {
  return (
    <Router basename={baseName}>
      <div className="App">
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/shop" component={Shop} />
          <Route path="/event" component={Event} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
      <ResetStyles />
      <GlobalStyles />
    </Router>
  );
}

export default App;
