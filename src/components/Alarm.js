import React, { Component } from "react";
import "../App.css";

export default class Alarm extends Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
     };
     this.Set_Alarm_Time = this.Set_Alarm_Time.bind(this);
  }
  
  componentDidMount(){
      this.clock = setInterval(
        () => this.Set_Current_Time(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
  }
  
  componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
  }
  
  Set_Current_Time(){
      this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
  }
  
  Set_Alarm_Time(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
  }
  
  checkAlarmClock(){
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Set your alarm!";
      } else {
        this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
        if (typeof(Storage) !== "undefined") {
          // Store
          window.localStorage.setItem("alarmHistory", JSON.stringify(this.state.alarmTime));
  
      } else {
          this.locStMesg= "Sorry, your browser does not support Web Storage...";
      }  
      
        if(this.state.currentTime === this.state.alarmTime) {
            window.confirm("It's Time!!!!");
        } else {
          console.log("not yet");
        }
     }   
  }
  
  render() {
      return (
        <React.Fragment>
        <div className = "Alarm" >
        <div className = "Alarm-header" > Alarm< /div>
        <div>
          
          <h2>Current Time: {this.state.currentTime}.
          </h2>
         
          <h2>{this.alarmMessage}
          </h2>
          <h3>{this.locStMesg}

          </h3>
          <form>
            <input type="time" onChange={this.Set_Alarm_Time}></input>
          </form>
        </div>
        
       </div>
        <AlarmHistory />
        </React.Fragment>
      )
    }
  }

  
  class AlarmHistory extends Component{
    render() {
      return (
    <div className = "AlarmHistory" >
     <div className = "Alarm-History-header" > Alarm History - Local Storage< /div>
     <div id="myDiv">
  <table id="myTab">
    <tbody><tr>
        <th>Time</th>
      </tr>
    </tbody></table>
</div>

     </div>
      )
    }
  }
