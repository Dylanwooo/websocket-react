/**
 * Created by Dylanwoo on 2017/10/24.
 */
import React, { Component } from 'react';

class CommentList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '初始化webSocket...'
        };
        //ws = io.connect('ws://localhost:3003');

    }
    componentWillUpdate(){
        /*ws.on('news',function (data) {
            //接收后台传来的数据
            console.log(data);
            this.setState({message: data})
            //发送数据到后台
            ws.emit('my other event',{my:'dylanwoo'});
        })*/
    }
    render(){
        return(
            <div id="message">
                {this.state.message}
            </div>
        )
    }
}

export default CommentList