import Taro, {Component} from '@tarojs/taro'
import {View, Text, Progress, RichText, Button, Input, Switch} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

    // state={}

    constructor(props) {
        super(props);
        this.state = {
            des: "",
            title: "",
            anonymous: 1,
            radio: 1
        }
    }


    config = {
        navigationBarTitleText: '首页'
    };

    componentWillMount() {
    }

    /*页面  onLoad   onReady  onSHow  onHide  onError*/
    componentDidMount() {

    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        let {title, des, date, anonymous, radio} = this.state;
        return (
            <View className='index'>
                标题:<Input type="text" value={title} onChange={(event) => {

                this.setState({
                    title: event.detail.value
                })
            }}
            />

                描述:<Input type="text" value={des} onChange={(event) => {

                this.setState({
                    des: event.detail.value
                })


            }}
            />
                是否单选:
                <Switch onChange={(e) => {
                    console.log(e.detail.value)
                }}/>
                是否匿名:
                <Switch onChange={(e) => {
                    console.log(e.detail.value)
                }}/>


                <Picker mode="date" value={date} start="2015-09-01" end="2020-09-01" onChange={(e) => {

                    console.log(e.detail.value);
                    this.setState({date: e.detail.value})

                }}>
                    <View className="picker">
                        当前选择: {date}
                    </View>
                </Picker>


                <Button onClick={() => {
                    Taro.request({
                        method: "POST",
                        url: "http://localhost:7001/postVote",
                        data: {

                            title, des, endTime: date, anonymous, radio, userId: 1001,
                            chooseList: [
                                {chooseContent: "白白的"}
                                , {chooseContent: "185以上"}
                                , {chooseContent: "胖胖的"}
                                , {chooseContent: "150斤"}
                                , {chooseContent: "萝莉型"}
                                , {chooseContent: "御姐型"}
                                , {chooseContent: "帅的"}
                                , {chooseContent: "高的"}
                                , {chooseContent: "渣的"}]


                        },
                        success: (res) => {
                            Taro.showToast({
                                title: '成功',
                                icon: 'success',
                                duration: 2000
                            })

                        }

                    })


                }}>发起投票</Button>
            </View>
        );
    }
};
