import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import {Provider} from "mobx-react";
import Day1011 from "./Day1011";


class Home extends Component {
  render() {
    return (
     
        <Router>
          <Switch>
            <Route path="/day1011" component={Day1011}/>
            <Redirect to="/day1011"/>
          </Switch>
        </Router>

    );
  }
}

export default Home;
