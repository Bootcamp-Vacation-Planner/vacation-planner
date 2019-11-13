import React, { Component } from 'react';
import TemporaryDrawer from './inputForm';
import SimpleContainer from './itineraryform';
import moment from 'moment';
import API from '../utils/API';

class Home extends Component {
    state = {
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        details: "",
        events:[]
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    eventSubmit = event => {
        let startDate = moment().toISOString(this.state.date + this.state.startTime);
        let endDate = moment().toISOString(this.state.date + this.state.endTime)
        console.log(startDate);
<<<<<<< HEAD

        axios.post('/api/events', {
            name: this.state.name,
            startTime: startDate,
            endTime: endDate,
            details: this.state.details,
            createdBy: this.props.userName
=======
        API.eventPost({
          name: this.state.name,
          startTime: startDate,
          endTime: endDate,
          details: this.state.details,
          createdBy: this.props.userName
        })
        .then(function (response) {
          console.log(response);
>>>>>>> master
        })
            .then(function (response) {
                console.log(response);
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

      componentDidMount(){
        axios.get("/api/events/").then(data=>this.setState({events:data.data})
        )
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
<<<<<<< HEAD
                <SimpleContainer />


=======
                <SimpleContainer events={this.state.events}/>
>>>>>>> master
            </div>
        )

    }
}

export default Home
