/**
 * Created by Dylanwoo on 2017/10/24.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    };
    render(){
        return(
            <div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment