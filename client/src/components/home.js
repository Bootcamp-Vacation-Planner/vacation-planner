import React, { Component } from 'react';
import TemporaryDrawer from './inputForm';
import SimpleContainer from './itineraryform';
import axios from 'axios';
import moment from 'moment';

class Home extends Component {
    state = {
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        details: ""
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
        
        axios.post('/api/events', {
          name: this.state.name,
          startTime: startDate,
          endTime: endDate,
          details: this.state.details
        })
        .then(function (response) {
          console.log(response);
        })
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
<<<<<<< HEAD

                <TemporaryDrawer />
=======
                
                <TemporaryDrawer 
                    eventSubmit = {this.eventSubmit}
                    handleInputChange = {this.handleInputChange}
                    dataName = {this.state.name}
                    date = {this.state.date}
                    startTime = {this.state.startTime}
                    endTime = {this.state.endTime}
                    details = {this.state.details}
                    />
>>>>>>> master
                <br></br>
                <SimpleContainer />


            </div>
        )

    }
}

export default Home
