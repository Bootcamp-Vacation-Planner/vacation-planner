import React, { Component } from 'react'
import TemporaryDrawer from './inputForm'
import SimpleContainer from './itineraryform'
class Home extends Component {


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

                <TemporaryDrawer />
                <br></br>
                <SimpleContainer />


            </div>
        )

    }
}

export default Home
