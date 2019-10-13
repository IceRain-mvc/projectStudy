import Taro, {Component} from '@tarojs/taro'
import {View, Text, Progress, RichText, Button} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

    // state={}

    constructor(props) {
        super(props);
        this.state = {
            html:"<h1>哈哈哈哈哈</h1>"
        }
    }


    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <View className='index'>
                <Text>Hello world!</Text>
                <Progress percent="20" show-info/>
                <Progress percent="40" stroke-width="12"/>
                <Progress percent="60" color="pink"/>
                <Progress percent="80" active/>
                <RichText nodes={this.state.html}/>

                <Button onClick={()=>{
                    Taro.showModal({
                        title: '提示',
                        content: '这是一个模态弹窗',
                        success (res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            } else if (res.cancel) {
                                console.log('用户点击取消')
                            }
                        }
                    })

                }}>弹一下嘛</Button>
            </View>
        )
    }
}
