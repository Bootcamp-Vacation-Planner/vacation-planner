import React, { Component } from 'react';
import moment from 'moment';
import axios from "axios";


class CommentForm extends Component {
 
    render() {
        return (
            <form>
                <textarea name="body" value={this.props.body} onChange={this.props.handleInputChange}>Add a comment.</textarea>
                <button type="submit" onClick={this.props.commentSubmit}>Submit</button>
            </form>
        )
    }    


}

export default CommentForm;