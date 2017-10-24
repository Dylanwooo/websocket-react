import React, { Component } from 'react';
//import Websocket from 'react-websocket';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import io from 'socket.io-client';
import './App.css';

class App extends Component {

    handleSubmitComment(comment){
        console.log(comment)
    }
    render() {
          return(
              <div>
                  <div className="title">
                      HELLO,WELCOME TO THE CHATROOM!
                  </div>
                  <div className="comments">
                      <CommentList/>
                  </div>
                  <div className="editor">
                      <hr />
                      <CommentInput onSubmit={ this.handleSubmitComment.bind(this) }/>
                  </div>
              </div>
          )
    }
}

/*class Chatbox extends Component{
    constructor(props) {
        super(props);
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
}*/

export default App;
