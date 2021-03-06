import React, { Component } from 'react';
import TemporaryDrawer from './inputForm';
import SimpleContainer from './itineraryform';
import moment from 'moment';
import API from '../utils/API';
import axios from "axios";
import Likes from './likes';


class Home extends Component {
  state = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
    events: [],
    // commentId: "",
    body: "",
    linkevent: "",
    likes: 0,
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    axios.get("/api/events/").then(data => this.setState({ events: data.data }))
    console.log(this.state.events);

  }

  // commentAdd = () => axios.put('/api/events/comment/' + eventid), {
  //   comments: response.data._id
  // }.then(res => console.log(res))
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  
  commentSubmit = event => {
    let eventid = event.target.getAttribute('linkevent')
    let commentId = "";
    console.log(eventid);
    
    event.preventDefault();
    let creationDate = moment().toISOString(true);
    axios.post('/api/comments/', {
      createdOn: creationDate,
      createdBy: this.props.userName,
      body: this.state.body
    }).then(response => {
          console.log(response.data._id);
          commentId = response.data._id;
          console.log(commentId);
    }).then(() => {
          return axios.put('/api/events/comment/' + eventid + "/" + commentId), {
        }
    })
      .catch(function (error) {
        console.log(error);
      });
    
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  eventSubmit = event => {
    let startDate = moment(this.state.date + " " + this.state.startTime).toISOString(true);
    let endDate = moment(this.state.date + " " + this.state.endTime).toISOString(true);
    console.log(startDate);
    
    this.setState ({
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      details: "",
    
    })

    API.eventPost({
      name: this.state.name,
      startTime: startDate,
      endTime: endDate,
      details: this.state.details,
      createdBy: this.props.userName
    })
      .then(res => this.getEvents())
      .catch(function (error) {
        console.log(error);
      });
  }

  // incrementMe = () => {
  //   let newCount = this.state.likes + 1
  //   this.setState({
  //     likes: newCount
  //   })
  // }

  likeClicker = (eventid, likes1) => {
    console.log(eventid);

    // let eventID = event.target.eventid;
    // let newLikes = event.target.likenumber;
    console.log(likes1);

    // this.forceUpdate({
    //   likes: likes1 + 1
    // })
    this.setState({
      likes: likes1 + 1
    })
    console.log(this.state.likes);
    // console.log(eventID);
    API.likeUpdate(
      eventid, this.state.likes
    )
  }

  render() {
    const imageStyle = {
      width: 400
    }
    if (this.props.loggedIn) {
      return (
        <div className="background">
          <p>Plan your Itinerary!</p>
          {/* <container id="input">Create Itinerary here</container> */}
          {/* <Input/> */}
          {/* <SwipeableTemporaryDrawer/> */}
          <TemporaryDrawer
            eventSubmit={this.eventSubmit}
            handleInputChange={this.handleInputChange}
            dataName={this.state.name}
            date={this.state.date}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            details={this.state.details}
          />
          <br></br>
          <SimpleContainer
            userName={this.props.userName}
            events={this.state.events}
            body={this.state.body}
            handleInputChange={this.handleInputChange}
            commentSubmit={this.commentSubmit}
          />
        </div >
      )
    } else {
      return (<div className="background"><p> </p>
      <p> </p>
      <p> </p>
      <p> </p>
      <p> </p>
      <p> </p><h1><container className="homepage">Log in to get started.</container></h1></div>)
    }
    

  }
}

export default Home
