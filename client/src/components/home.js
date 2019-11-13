import React, { Component } from 'react';
import TemporaryDrawer from './inputForm';
import SimpleContainer from './itineraryform';
import moment from 'moment';
import API from '../utils/API';
import axios from "axios";


class Home extends Component {
  state = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
    events: []
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    axios.get("/api/events/").then(data => this.setState({ events: data.data }))
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  eventSubmit = event => {
    let startDate = moment(this.state.date + " " + this.state.startTime).toISOString(true);
    let endDate = moment(this.state.date + " " + this.state.endTime).toISOString(true);
    console.log(startDate);
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



  render() {
    const imageStyle = {
      width: 400
    }
    return (
      <div className="background">
        <p>Plan your Itinerary!</p>
        <container id="input">Create Itinerary here</container>
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
        <SimpleContainer events={this.state.events} />
      </div >
    )

  }
}

export default Home
