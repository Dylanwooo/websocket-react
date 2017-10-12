import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';

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
class MsgArea extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div id="message"></div>
        )
    }
}
class MsgInput extends Component{
    constructor() {
        super();
    }
    render(){
        return(<input id="text" type="text" placeholder="Type here..."/>)
    }
    componentDidMount () {
        let input = document.getElementById('text');
        input.focus();
    }
}
class BtnArea extends Component{
    constructor() {
        super();
    }
    send(){
        let message = document.getElementById('text').value;
        //websocket.send(message);
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
