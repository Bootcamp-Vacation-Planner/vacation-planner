import React, { Component } from 'react';
import TemporaryDrawer from './inputForm';
import SimpleContainer from './itineraryform';
import axios from 'axios';

class Home extends Component {
    state = {
        value: "",
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
        axios.post('/api/events', {
          name: 'Fred',
          lastName: 'Flintstone'
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
               <container id= "input">Create Itinerary here</container>
                {/* <Input/> */}
                {/* <SwipeableTemporaryDrawer/> */}
                
                <TemporaryDrawer 
                    eventSubmit = {this.eventSubmit}
                    handleInputChange = {this.handleInputChange}
                    value = {this.state.value}
                    />
                <br></br>
                <SimpleContainer/>
            </div>
        )

    }
}

export default Home
