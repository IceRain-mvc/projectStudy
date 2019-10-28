import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

// import {Provider} from "mobx-react";
// import Day1011 from "./Day1011";
import Day1022 from "./Day1022";
import Auth from "./Auth";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*1: 授权按钮*/}
          <Route path="/day1022" component={Day1022}/>
          {/*2: 获取授权码*/}
          <Route path="/auth" component={Auth}/>
          <Redirect to="/day1022"/>
        </Switch>
      </Router>

    );
  }
}

export default Home;
