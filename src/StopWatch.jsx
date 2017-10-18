import React, { Component } from 'react';
import './App.css';
import AlertContainer from 'react-alert'

class StopWatch extends Component {

  constructor(props) {
      super(props);
      this.state = {
        hours: 0,
        minutes: 0,
        seconds: 10,
        intervalId: 1
      }
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 500,
    transition: 'none'
  }

  showAlert = () => {
    this.msg.show('TIME IS UP', {
      time: 500,
      type: 'error',
      //icon: <img src="path/to/some/img/32x32.png" />
    })
  }

  componentWillMount() {
    //console.log('stopwatch-time',this.props.stopwatchTime);
    //console.log('final time',this.props.stopwatchTime);
    // let t = Date.parse(new Date());
    // let finalTime = (+t) + (+this.props.stopwatchTime);
    // console.log('t',t);
    // console.log('final time',finalTime);
    // this.setState({finalTime: finalTime})
    this.getTime(this.props.stopwatchTime);
  }

  componentDidMount() {
     setInterval(() => this.getTime(this.props.stopwatchTime), 1000);
     //this.setState({intervalId: setInterval(() => this.getTime(this.props.stopwatchTime), 1000)});
  }

  leading0(num) {
    return num<10 ? '0'+num : num;
  }

  getTime(finalTime) {
    console.log(this.state.intervalId);
    //console.log('finalTime', finalTime);
    const time = finalTime - Date.parse(new Date());
    //console.log('timee',time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/(1000*60)) % 60);
    const hours = Math.floor((time/(1000*60*60)) % 24);

    if((hours < 0 || minutes < 0) || seconds < 0) {
      this.showAlert();
      //    clearInterval(this.state.intervalId);
      //    this.setState({intervalId: 1})
    }
    else {

      this.setState({hours: hours,minutes: minutes, seconds: seconds})
    }
  }

  render() {
    return (
      <div>
        <div className="stopwatch-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="stopwatch-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="stopwatch-seconds">{this.leading0(this.state.seconds)} seconds</div>

        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          {/* <button onClick={this.showAlert}>Show Alert</button> */}
      </div>
    )
  }
}

export default StopWatch;
