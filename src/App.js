import Stopwatch from "./components/Stopwatch";

import Countdown from "./components/Countdown";
import Alarm from "./components/Alarm";
import React, { Component } from "react";
class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            div className = "App-title" > Smart Clock < /div> <
            div className = "Timers" >
            <
            Stopwatch / >
            <
            Countdown / >
            <
            Alarm / >
            <
            /div> 
             
            < /
            div >
        );
    }
}

export default App;