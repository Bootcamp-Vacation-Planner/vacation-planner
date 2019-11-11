import React, { Component } from 'react'
import Input from './inputForm'
import TemporaryDrawer from './inputForm'
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
                <TemporaryDrawer />
            </div>
        )

    }
}

export default Home
