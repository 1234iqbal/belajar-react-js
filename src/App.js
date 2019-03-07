import React, { Component } from "react";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import Main from "./containers/Main";
import Content from "./containers/Content";
import Contact from "./containers/Contact";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Contact} />
          <Route path="/about" component={Content} />
          <Route path="/contact" component={Content} />
          <Route path="/dasboard" component={Contact} />
          <Route path="/user" component={Contact} />
          <Route path="/dinaminggu/:id" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
