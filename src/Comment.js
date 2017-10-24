/**
 * Created by Dylanwoo on 2017/10/24.
 */
import React, { Component } from 'react';

class Comment extends Component{
    render(){
        return(
            <div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment