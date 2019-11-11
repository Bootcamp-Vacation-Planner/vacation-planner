import React, { Component } from 'react'
import Input from './inputForm'
import TemporaryDrawer from './inputForm'
import SimpleContainer from './itineraryform'
class Home extends Component {


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Plan your Itinerary!</p>
               <container id= "input">Create Itinerary here</container>
                {/* <Input/> */}
                {/* <SwipeableTemporaryDrawer/> */}
                <SimpleContainer/>
                <TemporaryDrawer />
            </div>
        )

    }
}

export default Home
