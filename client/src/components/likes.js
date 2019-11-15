import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API"

class Likes extends Component {
    state = {
        likes: 0
    }

    test = (eventid, likes1) => {

        likes1 += 1;
        API.likeUpdate(
            eventid, likes1
        )
    }
    render(props) {

        return (
            <div>
                <button likeNumber={this.props.likenumber} eventID={this.props.eventid} variant="outlined" size="large" color="primary" onClick={() => this.test(this.props.eventid, this.props.likenumber)}>
                    Like! {this.props.likenumber}
                </button>
            </div>
        )

    }
}

export default Likes