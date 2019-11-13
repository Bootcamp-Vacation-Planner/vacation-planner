import React, { Component } from 'react'
import InputForm from './inputForm'
import API from '../utils/API'
import SimpleContainer from './itineraryform'
class Home extends Component {
    state={
        data:[],
        eventDate: "",
        startTime:"",
        endTime:"",
        details:""
    }

     componentDidMount() {
        // this.loaddata();
      }
    
    // loadData = () => {
    //     API.getData()
    //       .then(res =>
    //         this.setState({ data: res.data, eventDate: "", time: "", date: "", details:"" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.eventDate && this.state.time) {
    //       API.saveData({
    //         eventDate: this.state.eventDate,
    //         time: this.state.time,
    //         details: this.state.details
    //       })
    //         .then(res => this.loadData())
    //         .catch(err => console.log(err));
    //     }
    //   };
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
      };

    eventSubmit = event => {
        let startDate = moment().toISOString(this.state.date + this.state.startTime);
        let endDate = moment().toISOString(this.state.date + this.state.endTime)
        console.log(startDate);
        
        axios.post('/api/events', {
          name: this.state.name,
          startTime: startDate,
          endTime: endDate,
          details: this.state.details,
          createdBy: this.props.userName
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
                <container id="itinerary">Plan your Itinerary!</container>
               {/* <container id= "input">Create Itinerary here</container> */}
                {/* <Input/> */}
                {/* <SwipeableTemporaryDrawer/> */}
                
                <InputForm
                onChange= {this.handleInputChange}
                dataName={this.state.data}
                date={this.state.date}
                startTime={this.state.startTime}
                endTime={this.state.endTime}
                details={this.state.details}


                />
                <br></br>
                <SimpleContainer/>
                <br/>
                <br/>
            </div>
        )

    }
}

export default Home
