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
                <p>It's good to be home</p>
                <img style={imageStyle} alt="home" src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
                {/* <Input/> */}
                {/* <SwipeableTemporaryDrawer/> */}
                <TemporaryDrawer />
            </div>
        )

    }
}

export default Home
