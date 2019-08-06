import React, {Component} from 'react';
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

            num: 0
        }
    }

    add() {
        this.props.add(this.state.num);
    }

    sub() {
        this.props.sub(this.state.num);
    }


    render() {
        let {num} = this.state;
        return (
            <div>
                <button onClick={this.add.bind(this)}>-</button>
                <button onClick={this.sub.bind(this)}>+</button>
                <h1>{num}</h1>
                <hr/>
            </div>
        );
    }
}

/*
* 获取数据
* */
const initMapStateToProps = (state) => {
    return {}
};

/*
* 分发数据
*
* */
const initMapDispatchToProps = (dispatch) => {
    return {

        add(num) {
            dispatch({type:"ADD",num});
        },
        sub(num) {
            dispatch({type:"SUB",num});

        }

    }
};

Header = connect(initMapStateToProps, initMapDispatchToProps)(Header);

export default Header;
