import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import io from 'socket.io-client';
import './App.css';

let ws;
class App extends Component {

    constructor(){
        super();
        this.state  ={
            //初始化一个数组用于保存前后端交流的数据
            comments:[]
        }
    }

    _loadComments(){
        let comments = localStorage.getItem('comment');
        if(comments){
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }

    componentWillMount(){
        this._loadComments();
    }

    _saveComments(comments){
        localStorage.setItem('comment',JSON.stringify(comments));
    }

    handleSubmitComment(comment){
        if(!comment) return;
        if(!comment.content) return alert('输入点啥呗!');
        this.state.comments.push(comment);
        const comments = this.state.comments;
        this.setState({
            comments: this.state.comments
        });
        this._saveComments(comments);
        ws = io.connect('ws://localhost:3003');
        ws.on('news',function (data) {
            //发送数据到后台
             ws.emit('my other event',comment);
             //接收后台传来的数据
             console.log(data);
         })
    }
    render() {
          return(
              <div>
                  <div className="title">
                      HELLO,WELCOME TO THE CHATROOM!
                  </div>
                  <div className="comments">
                      <CommentList comments={this.state.comments}/>
                  </div>
                  <div className="editor">
                      <hr />
                      <CommentInput onSubmit={ this.handleSubmitComment.bind(this) }/>
                  </div>
              </div>
          )
    }
}

export default App;
