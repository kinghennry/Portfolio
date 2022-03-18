import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Portfolio, Home } from "./pages";
import { Footer, Nav } from "./components";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
