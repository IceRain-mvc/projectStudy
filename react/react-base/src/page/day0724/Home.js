import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import store from "./store";
import {Provider} from "mobx-react";
import Video from "./views/Video";
import Audio from "./views/Audio";
import Info from "./views/Info";

class Home extends Component {
    render() {
        return (
            <Provider {...store}>
                <Router>
                    <Switch>
                        <Route path="/video" component={Video}/>
                        <Route path="/audio" component={Audio}/>
                        <Route path="/info" component={Info}/>
                        <Route path="/day1011" component={Day1011}/>

                        <Redirect to="/day1011"/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Home;
