import React, {Component} from 'react';
import axios from "axios"

class Day1011 extends Component {

  state = {
    title:"",
    des:"",
    data:[]

  }
  render() {

    let {title,des,data} = this.state
    return (
      <div>
        代祷：<input type="text" value={title} onChange={(e)=>{
          this.setState({title:e.target.value})

      }}/>
        描述：<input type="text" value={des} onChange={(e)=>{
          this.setState({des:e.target.value})

      }}/>
        <button onClick={()=>{

          axios.post("/home/add",{
            title,des,time:"2019-10-12 11:11",isTop:0,userName:"zhangsan",icon:"http://puui.qpic.cn/qqvideo_ori/0/q0519xjxrso_496_280/0"
          }).then((res)=>{
            console.log(res)
            this.requestAll()
          })
        }}>提交</button>


        {data.length&&data.map((item,index)=>{
          return <div key={item.daidaoId}>
            <h3>{item.title}</h3>
            <h4>{item.des}</h4>
            <h4>{item.time}</h4>
            <hr/>
          </div>
        })}
      </div>
    );
  }

  componentDidMount() {
    this.requestAll()
  }

  requestAll = ()=>{
    axios.get("/home/all").then((res)=>{
      this.setState({
        data:res.data.result
      })

    })

  }
}

export default Day1011;
