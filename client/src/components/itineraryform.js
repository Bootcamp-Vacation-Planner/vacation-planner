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
import { borderRight } from '@material-ui/system';
import { borderLeft } from '@material-ui/system';
export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#9C97C1', height: '100vh', opacity: .9 }} >
          {console.log(props.events)
          }
          {props.events.map(e =>

            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {e.name}
                </Typography>
                {/* <Typography variant="h5" component="h2">
                  {e.date}
                </Typography> */}
                <Typography variant="h5" component="h2">
                  {e.startTime}
                </Typography>
                <Typography variant="h5" component="h2">
                  {e.details}
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
              </CardActions>
            </Card>
          )}
        </Typography>

      </Container>
    </React.Fragment>
  );
}