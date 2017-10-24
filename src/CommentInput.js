/**
 * Created by Dylanwoo on 2017/10/24.
 */
import React, { Component } from 'react';


class CommentInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    handleSubmit() {
        //判断如果在父组件中存在onSubmit方法的话
        if(this.props.onSubmit){
            const {content} = this.state;
            //往父组件App里传东西
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
    handleCloseBtn(){

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

export default CommentInput