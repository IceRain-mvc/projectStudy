import React, {Component} from 'react';
import {connect} from "react-redux";

class MAIN extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
            </div>
        );
    }
}

/*
* 获取数据
* */
const initMapStateToProps = (state) => {
    return {
        num: state.myReducer
    }
};

/*
* 分发数据
*
* */
// const initMapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// };

MAIN = connect(initMapStateToProps)(MAIN);

export default MAIN;
