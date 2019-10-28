import React, {Component} from 'react';
//1引入
import io from "socket.io-client";
import axios from "axios";
import "./Day1019.css";

class Day1019 extends Component {
  //1:建立连接
  state = {
    socket: null,
    message:"",
    name:"",
    messageList:[],
    userId:-1,
    userList:[],
    toName: ""
  };

  //2:收发消息

  componentDidMount() {
    //http ws://
    const socket = io("ws://192.168.31.2:4546");

    this.setState({socket});

    // 事件  events:
    let newList = [];
    let _this = this;
    socket.on("message", function (obj) {
      newList.push(obj);
      _this.setState({
        messageList: newList
      })
    });
    socket.on("setResult" ,(res)=> {
      // console.log(res);
      res = JSON.parse(res);
      let arr = [];
      for (let i in res.hashArr) {
        arr.push(i);
      }
      _this.setState({
        userList: arr
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.userList.length!==0&&this.state.userList.map((item,index)=>{
              return <li className="item" onClick={()=>{
                this.setState({
                  toName: item
                })
              }} key={index}>
                {item}
                <hr/>
              </li>;
            })

          }
        </ul>
        你叫啥? <input type="text" value={this.state.name} onChange={(e)=>{
        this.setState({
          name:e.target.value
        })
      }}/>

        <button onClick={()=>{
          this.state.socket.emit("setName", this.state.name);
        }}>登录</button>
        <hr/>

        <input type="text" value={this.state.message} onChange={(e)=>{
          this.setState({
            message:e.target.value
          })
        }}/>

        <button onClick={()=>{

          let obj = {
            //这个人的id
            userId: this.state.userId,
            //1:人名
            name:this.state.name,
            //2:时间
            time: new Date().toLocaleString(),
            //3:消息
            msg:this.state.message,
            toId: 1,
            toName: this.state.toName
            //发送给谁 id
          };
          this.state.socket.emit("message", obj);
        }}>发送</button>
        <ul>
          {
            this.state.messageList.length!==0&&this.state.messageList.map((item,index)=>{
              return <li key={index}>
                姓名:<span>{item.name}</span>&nbsp;
                时间:<span>{item.time}</span>&nbsp;
                消息:<span>{item.msg}</span>&nbsp;
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Day1019;
