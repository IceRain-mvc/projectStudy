import Taro, {Component} from '@tarojs/taro'
import {View, Text, Progress, RichText, Button} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

    // state={}

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }


    config = {
        navigationBarTitleText: '首页'
    };

    componentWillMount() {
    }

    /*页面  onLoad   onReady  onSHow  onHide  onError*/
    componentDidMount() {
        let that = this;
        Taro.request({

            url: "http://localhost:7001/voteList",
            method: "GET",
            success(res) {
                that.setState({
                    result: res.data.result
                })
            }
        })
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        let {result} = this.state;
        return (
            <View className='index'>
                <Button type="primary" onClick={()=>{

                    /* /  不要丢了 */
                    Taro.navigateTo({
                        url:"/pages/addVote/index"

                    })

                }}>发起投票</Button>
                {
                    result.map((item, index) => {
                        return <View className={"list"}>
                            <Text>标题:{item.title}</Text> |
                            <Text>截止日期:{item.endTime}</Text> |
                            <Text>{item.anonymous ? "匿名" : "非匿名"}</Text> |
                            <Text>{item.radio ? "单选" : "多选"}</Text>
                        </View>;
                    })

                }
            </View>
        );
    }
}
