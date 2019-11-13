import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 400,
    padding: 15
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, true)}
    >
      <div className="form-group">
        <p>Name of Event:</p>
          <input className="form-control-name" type="text" placeholder="Event Name" name="name" value={props.dataName} onChange={props.handleInputChange}/>
        <p>Event Date:</p>
          <input className="form-control-date" type="date" placeholder="Date" name="date" value={props.date} onChange={props.handleInputChange}/>
        <p>Start Time:</p>
          <input className="form-control-time" type="time" placeholder="Start Time" name="startTime" value={props.startTime} onChange={props.handleInputChange}/>
        <p>End Time:</p>
          <input className="form-control-time" type="time" placeholder="End Time" name="endTime" value={props.endTime} onChange={props.handleInputChange}/>
        <p>Event Details:</p>
          <input className="form-control-details" type="text" placeholder="Details" name="details" value={props.details} onChange={props.handleInputChange}/>
        <button onClick={props.eventSubmit}> Submit </button>

      </div>

    </div>
  );



  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Add Event</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}