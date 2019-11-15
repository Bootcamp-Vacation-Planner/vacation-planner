import React, { Component } from 'react';



class CommentForm extends Component {

    render() {
        return (
            <form>
                <textarea name="body" value={this.props.body} onChange={this.props.handleInputChange}>Add a comment.</textarea>
                <button type="submit" linkevent = {this.props.id} onClick={this.props.commentSubmit}>Submit</button>
            </form>
        )
    }    


}

export default CommentForm;