import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

/*
* 存数据
*
* observer:function(target){
*
* }
*
*
* */
@inject("testStore")
@observer
class Header extends Component {
    render() {
        return (
            <div>
                <button onClick={this.save.bind(this)}>存到仓库</button>

            </div>
        );
    }

    save() {
        console.log(this.props);
        this.props.testStore.setData("王五");


    }
}

export default Header;
