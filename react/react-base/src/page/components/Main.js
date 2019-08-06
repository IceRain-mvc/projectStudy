import React, {Component} from 'react';
import {observer} from "mobx-react";
/*
* 观察者
*
* Provider
* */

@observer
class Main extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.testStore.data}
            </div>
        );
    }
}

export default Main;
