import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import CommentForm from './commentForm';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

let commentArray = [];


export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    let grabID = props.id
    const getComments = () => {
      axios.get("/api/events/populate/"+grabID)
      .then(data=>{
        commentArray = data.data.comments;
        console.log(commentArray);
        commentArray.map(e => {
          let text = e.body
          let node = document.createElement("p");
          let textnode = document.createTextNode(text);
          node.appendChild(textnode);
          document.getElementById("commentContainer").appendChild(node);
        })
      })
    }

    const handleOpen = () => {
      setOpen(true);
      getComments();
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >

          <div style={modalStyle} className={classes.paper}>
            <div id="commentContainer"></div>
            <CommentForm id={props.id} getComments={getComments} user={props.user} body={props.body} handleInputChange={props.handleInputChange} commentSubmit={props.commentSubmit}/>
          </div>
        </Modal>
      </div>
  );
}