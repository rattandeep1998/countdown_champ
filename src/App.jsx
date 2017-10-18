import React, { Component } from 'react';
import Clock from './Clock';
import StopWatch from './StopWatch'
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      stopwatchTime: '0',
      stopwatchNewTime: ''
    }
  }

  componentWillMount() {
    let t = Date.parse(new Date());
    this.setState({stopwatchTime: (+t)+10000})
  }

  changeDeadline() {
    console.log('state',this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  changeTime() {
    let t = Date.parse(new Date());
    let finalTime = (+t) + (+this.state.stopwatchNewTime) + 1000;
    console.log('t',t);
    console.log('final time',finalTime);
    this.setState({stopwatchTime: finalTime})
    console.log('stateee',this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline={true}>
          <FormControl
            className='deadline-input'
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
        <br />
        <div className="App-title">
          TIME LEFT :
        </div>
        <StopWatch
          stopwatchTime={this.state.stopwatchTime}
        />
        <Form inline={true}>
          <FormControl
            // type='time'
            // step='1'
            className='countertime-input'
            placeholder='10000(enter counter time)'
            onChange={event => this.setState({stopwatchNewTime: event.target.value})}
          />
          <Button onClick={() => this.changeTime()}>
            Start
          </Button>
        </Form>


      </div>
    )
  }
}

export default App;
