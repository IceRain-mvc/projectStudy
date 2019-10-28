import React, {Component} from 'react';
import axios from "axios";

class Day1017 extends Component {
  state = {
    pageSize: 5,
    page: 1,
    result: [],
    pageList: [],
    count:0
  };

  render() {
    let {
      pageSize,
      page,
      count,
      result,
      pageList
    } = this.state;
    return (
      <div>
        <button onClick={()=>{
          axios.post("/login",{name:"zhangsan", pwd:"123"}).then((res)=>{

            console.log(res.data);

            axios.get("/wz",{headers:{
                authorization: "Bearer "+res.data.token
              }}).then((result)=>{
              console.log(result);
            })
          })

        }}>login</button>
        {/*显示数据*/}
        <ul>
          {
            result.length && result.map((item, index) => {
              return <li key={item.id}>
                <h2>Id:</h2> {item.id}
                <h2>姓名:</h2> {item.name}
                <h3>年龄:</h3> {item.age}
                <h3>性别:</h3> {item.sex === 0 ? "男" : "女"}
                <hr/>
              </li>;

            })

          }
        </ul>
        {/*分页*/}
        {/*1: 所有数据的长度? count */}
        <ul>

        {
          pageList.length&&pageList.map((item,index)=>{

            return <li onClick={()=>{
              this.request(pageSize,item)

            }} style={{border:'1px solid #ccc',width:'55px',height:'55px',display:"inline-block"}} key={index}>{item}</li>
          })

        }

        </ul>


      </div>
    );
  }

  componentDidMount() {
    let {
      pageSize,
      page
    } = this.state;

    this.request(pageSize, page);
  }

  request(pageSize, page) {
    axios.get(`/getAllUser?pageSize=${pageSize}&page=${page}`)
      .then((res) => {
        let pages = Math.ceil(res.data.count / pageSize);
        let arr = [];
        for (let i = 1; i <= pages; i++) {
          arr.push(i)
        }
        this.setState({
          pageList: arr,
          count: res.data.count,
          result: res.data.result
        })
      })
  }
}

export default Day1017;
