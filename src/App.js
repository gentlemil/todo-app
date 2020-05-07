import React, { Component } from 'react';
import Countdown from './Countdown';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        { id: 0, name: 'breakfast', time: '07:00' },
        { id: 1, name: 'lunch', time: '15:00' },
        { id: 2, name: 'practise', time: '20:00' },
      ]
    }
  }
  render() {
    const events = this.state.events.map(el => {
      return <Countdown name={el.name} time={el.time} />
    });

    return (
      <div>
        {events}
      </div >
    )
  }
}

export default App;
