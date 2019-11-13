import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#9C97C1', height: '100vh', opacity: .9 }} >
          {console.log(props.events)
          }
          {props.events.map(e => 
          <div>
            {e.name}
          </div>
            )}
          </Typography>
        
      </Container>
    </React.Fragment>
  );
}