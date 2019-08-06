import React, {Component} from 'react';
import Main from "./components/Main";
import testStore from "../store/mobx";
import Header from "./components/Header";

class Home extends Component {
    render() {
        return (
            <div>
                <Header testStore={testStore}/>
                <hr/>
                <Main testStore={testStore}/>
            </div>

        );
    }
}

export default Home;
