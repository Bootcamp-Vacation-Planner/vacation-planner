import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

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
        count: 0
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {

        return (
            <div>
                <Button variant="outlined" size="large" color="primary" onClick={this.incrementMe}
                // className={classes.margin}>
                >
                    Like! {this.state.count}
                </Button>
            </div>
        )

    }
}

export default Likes