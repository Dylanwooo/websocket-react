/**
 * Created by Dylanwoo on 2017/10/24.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component{
    static defaultProps = {
        comments: []
    };
    constructor(props) {
        super(props);
        this.state = {
            message: '连接成功!'
        };

    }
    render(){
        return(
            <div className="message">
                {this.state.message}
                {this.props.comments.map((comment,i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

export default CommentList