import React, {Component} from 'react';
import axios from "axios"
class Day1016 extends Component {

  render() {
    return (
      <div>
        <h1>aaaa</h1>
        <button onClick={async ()=>{
          let result = await axios.post("/add", {
            userName: "牛",
            age: 20,
            sex: 0
          });
          if (result.data.code === 1) {
            alert("添加成功");
          }else{
            alert("添加失败");
          }
        }
        }>添加数据</button>
      </div>
    );
  }

  async componentDidMount() {
    let result = await axios.post("/post",{userName:"zhangsan"})
    console.log(result)
  }
}

export default Day1016;
