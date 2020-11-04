import React, { Component } from "react";
import "../App.css";
var i;
let minutes,hours,seconds,centiseconds;
class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        localStorage.setItem("alarmHistory", JSON.stringify(hours+":"+minutes+":"+seconds));
        var table = document.getElementById("scTab");
        var row = table.insertRow(i);
        var cell2 = row.insertCell(0);
        cell2.innerHTML = localStorage.getItem("alarmHistory");

        i = i + 1;
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    render() {
        const { timerTime } = this.state;
        centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return ( 
            <React.Fragment>
            <div className = "Stopwatch" >
                <
                div className = "Stopwatch-header" > Stopwatch </div> <
                div className = "Stopwatch-display" > { hours }: { minutes }: { seconds }: { centiseconds } 
                </div> {
                this.state.timerOn === false && this.state.timerTime === 0 && ( <
                    button onClick = { this.startTimer } > Start </button>
                )
            } {
                this.state.timerOn === true && ( <
                    button onClick = { this.stopTimer 
                    } > Stop </button>
                )
            } {
                this.state.timerOn === false && this.state.timerTime > 0 && ( <
                    button onClick = { this.startTimer } > Resume </button>
                )
            } {
                this.state.timerOn === false && this.state.timerTime > 0 && ( <
                    button onClick = { this.resetTimer } > Reset </button>
                )
            } </div>
            <div className = "StopwatchHistory">
     <div className = "Stopwatch-History-header" > Stopper History</div>
     <div id="scDiv">
     <p align="center">Time</p>
      <table id="scTab">
        <tbody align="center"><tr>   
          </tr>
        </tbody></table>
    </div>
    </div>
            </React.Fragment>
    );
}
}

export default Stopwatch;