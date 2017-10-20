import React, { Component } from 'react';
import Websocket from 'react-websocket';
import io from 'socket.io-client';
import './App.css';

let ws;
class App extends Component {
    constructor() {
        super();
        /* server.js的
        ws = new WebSocket("ws://localhost:3002");
        ws.onopen = function (e) {
            console.log('connection to server');
        };*/

    }
    render() {
          return(
              <div>
                  <Title />
                  <Chatbox />
              </div>
          )
    }
}
class Title extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div className="title">
                HELLO,WELCOME TO THE CHATROOM!
            </div>
        )
    }
}
class Chatbox extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div className="wrapper">
                <div className="content">
                    <div className="comments">
                        <MsgArea />
                    </div>
                    <div className="editor">
                        <hr />
                        <MsgInput />
                        <BtnArea />
                    </div>
                </div>
            </div>
        )
    }
}
//消息展示组件
class MsgArea extends Component{
    constructor() {
        super();
        this.state = {
            message: '初始化webSocket...'
        }
    }
    handleData(data) {
        let result = JSON.parse(data);
        this.setState({message: result})
    }
    render(){
        return(
            <div id="message">
                {this.state.message}
            </div>
        )
    }
}
//输入框组件
class MsgInput extends Component{
    constructor() {
        super();
        ws = io.connect('ws://localhost:3003');
        ws.on('news',function (data) {
            //接收后台传来的数据
            console.log(data);
            //发送数据到后台
            ws.emit('my other event',{my:'dylanwoo'});
        })
    }
    render(){
        return(
        <div>
            <input id="text" ref={(input) => this.input = input} type="text" placeholder="Type here..."/>
        </div>
        )
    }
    componentDidMount(){
        this.input.focus();
    }
}
//按钮组件
class BtnArea extends Component{
    constructor() {
        super();
    }
    send(){
        ws.onopen = function (e) {
            console.log('start to send message');
            ws.send('hi');
        };
    }
    render(){
        return(
            <div id="btnArea">
                <button className="sendMsg" onClick={this.send.bind(this)}>发送消息</button>
                <button className="closeCnt">关闭连接</button>
            </div>
        )
    }
}

export default App;
