import React, {Component} from 'react';
import axios from "axios";

class Day1022 extends Component {
  state = {
    code: "",
    clientId: "18f8a4ae98dfc22a5da4",
    client_secret: "1381ea5921c121f77bd531bb9973f194d334447d",
    user: {}
  };

  async componentDidMount() {
    // 获取code码
    let {code, clientId, client_secret} = this.state;
    //地址
    // ?code=fg3r4r3rf34r3rfgh534

    let message = this.props.location.search;
    // console.log(message);

    let newCode = message.slice(6);
    console.log(newCode);

    if (message) {
      const token = await axios({
        method: 'post',
        url: '/login/oauth/access_token?' +
          `client_id=${clientId}&` +
          `client_secret=${client_secret}&` +
          `code=${newCode}`,
        headers: {
          accept: 'application/json'
        }
      });

      console.log(token);

      let accessToken = token.data.access_token

      const result = await axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
          accept: 'application/json',
          Authorization: `token ${accessToken}`
        }
      });

      this.setState({
        user: result.data
      })

      //avatar_url
      //login

    }
  }

  render() {

    let {user} = this.state;
    window.user = user;
    return (
      <div>


        <button onClick={() => {
          //跳转 github

          /*
Client ID
18f8a4ae98dfc22a5da4
Client Secret
1381ea5921c121f77bd531bb9973f194d334447d


https://github.com/login/oauth/authorize?client_id=18f8a4ae98dfc22a5da4&redirect_uri=http://localhost:3000/day1022


          *
          * */
          window.location.href = "https://github.com/login/oauth/authorize?client_id=18f8a4ae98dfc22a5da4&redirect_uri=http://localhost:3000/day1022";

        }}>授权
        </button>
        {
          user.login && (<h1>用户名:{user.login}</h1>)
        }
        {
          user.login && (<img src={user.avatar_url} alt=""/>)
        }

      </div>
    );
  }
}

export default Day1022;
