import React, {Component} from "react";

export default class Home extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("组件加载完成");
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        <h1>我是react组件</h1>
      </div>
    );
  }
}
