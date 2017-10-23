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
    handleSubmitComment(content){
        console.log(content);
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
                        <MsgInput onSubmit={ this.handleSubmitComment.bind(this) }/>
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
        };
        ws = io.connect('ws://localhost:3003');

    }
    componentWillUpdate(){
        ws.on('news',function (data) {
            //接收后台传来的数据
            console.log(data);
            this.setState({message: data})
            //发送数据到后台
            //ws.emit('my other event',{my:'dylanwoo'});
        })
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
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    handleSubmit() {
        if(this.props.onSubmit){
            const {content} = this.state;
            this.props.onSubmit({content})
        }
        //将输入框内容清空
        this.setState({content:''});
    }
    handleMsgChange(event){
        this.setState({
            content: event.target.value
        })
    }
    render(){
        return(
        <div>
            <input className="text"
                   value={this.state.content}
                   ref={(input) => this.input = input}
                   onChange={ this.handleMsgChange.bind(this) }
                   placeholder="Type here..."/>
            <div className="btnArea">
                <button className="sendMsg" onClick={this.handleSubmit.bind(this)}>发送消息</button>
                <button className="closeCnt">关闭连接</button>
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.input.focus();
    }
}

export default App;
