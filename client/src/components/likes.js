import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API"

// const useStyles = makeStyles(theme => ({
//     margin: {
//         margin: theme.spacing(1),
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
// }));
// const classes = useStyles();

class Likes extends Component {
    state = {
        likes: 0
    }
    // incrementMe = () => {
    //     let newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // }
    // render(props) {

    test = (eventid, likes1) => {
        console.log(eventid);

        // let eventID = event.target.eventid;
        // let newLikes = event.target.likenumber;
        console.log(likes1);
        likes1 += 1;

        // this.setState({
        //     likes: 6
        // })

        API.likeUpdate(
            eventid, likes1
        )
    }
    render(props) {
        console.log(this.props);

        return (
            <div>
                {/* <Button likeNumber={this.props.likenumber} eventID={this.props.eventid} variant="outlined" size="large" color="primary" onClick={this.props.likeclicker}
                // className={classes.margin}>
                >
                    Like! {this.props.likenumber}
                </Button> */}
                <button likeNumber={this.props.likenumber} eventID={this.props.eventid} variant="outlined" size="large" color="primary" onClick={() => this.test(this.props.eventid, this.props.likenumber)}
                // className={classes.margin}>
                >
                    Like! {this.props.likenumber}
                </button>
            </div>
        )

    }
}

export default Likes