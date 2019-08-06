import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

/*
* Provider
* 就必须引入想要使用的仓库
*
* */

@inject("fetchVideoList")
@observer
class Video extends Component {

    clickSave() {
        this.props.fetchVideoList.setName("张三");
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>视频</h1>
                <button onClick={this.clickSave.bind(this)}>存同步数据</button>
                <h1>{this.props.fetchVideoList.name}</h1>

                <ul>

                    {
                        this.props.fetchVideoList.videoList && this.props.fetchVideoList.videoList.map((item, index) => {
                            return <li key={item.urlid}>
                                <h3>{item.sort_title}</h3>

                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        // this.props.fetchVideoList.saveVideoList("http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2");
        this.props.fetchVideoList.saveVideoAsync("http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2")
            .then((result) => {
                console.log(result);
            });


    }
}

export default Video;
