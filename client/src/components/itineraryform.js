import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SimpleModal from '../components/commentView';
import moment from 'moment';
import Likes from './likes';
export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="simplecontainer" maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#9C97C1', height: '100vh', opacity: .9 }} >
          {console.log(props.events)
          }
          {props.events.map(e => {
              let dateString = e.startTime;
              let startDate = moment.utc(dateString).format('ddd MMM DD, YYYY');
              let startTime = moment.utc(dateString).format('hh:mm a');
              return (< Card >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {e.name}
                </Typography>
                <Typography variant="h5" component="h2">
                  {startDate}
                </Typography>
                <Typography variant="h5" component="h2">
                  {startTime}
                </Typography>
                <Typography variant="h5" component="h2">
                  {e.details}
                </Typography>

              </CardContent>
              <CardActions>
                <Likes likenumber={e.likes} eventid={e._id} likeclicker={props.likeClicker} />
              </CardActions>
              <SimpleModal id={e._id} user={props.userName} state={props.body} handleInputChange={props.handleInputChange} commentSubmit={props.commentSubmit}/>
            </Card>)
})}
        </Typography>

      </Container>
    </React.Fragment >
  );
}