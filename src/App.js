import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';

let ws;
class App extends Component {
    constructor() {
        super();
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
            count:90
        }
    }
    handleData(data) {
        let result = JSON.parse(data);
        this.setState({count: this.state.count + result.movement});
        document.getElementById('message').innerHTML += result;
    }
    render(){
        return(
            <div id="message">
                <Websocket url='ws://localhost:3002' onMessage={this.handleData.bind(this)} />
            </div>
        )
    }
}
//输入框组件
class MsgInput extends Component{
    constructor() {
        super();
    }

    render(){
        return(
        <div>
            <input id="text" type="text" placeholder="Type here..."/>

        </div>
        )
    }
    componentDidMount () {
        let input = document.getElementById('text');
        input.focus();
    }
}
//按钮组件
class BtnArea extends Component{
    constructor() {
        super();
        ws = new WebSocket("ws://localhost:3002");
        ws.onopen = function (e) {
            console.log('connection to server');
            ws.send('sfsdf');
        };
    }
    send(){
        ws.onopen = function (e) {
            console.log('start to send message');


        };
        document.getElementById('text').value = '';
        document.getElementById('text').focus();
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
