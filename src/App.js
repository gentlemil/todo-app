import React, { Component } from 'react';
import Countdown from './Countdown';
import EditEvent from './EditEvent';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        { id: 0, name: 'breakfast', hour: '07', minute: '00' },
        { id: 1, name: 'lunch', hour: '15', minute: '00' },
        { id: 2, name: 'practise', hour: '20', minute: '00' },
      ],
      editedEvents: {
        id: '3',
        name: '',
        hour: '',
        minute: ''
      }
    };
  }

  handleEditEvent = val => {
    // console.log(val)
    this.setState(prevState => {
      return {
        editedEvents: Object.assign(prevState.editedEvents, val)
      };
    });
  }

  render() {
    const events = this.state.events.map(el => {
      return (
        <Countdown
          key={el.id}
          name={el.name}
          hour={el.hour}
          minute={el.minute}
        />
      );
    });

    return (
      <div className='app'>
        {events}
        <EditEvent
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => alert('A')} />
      </div>
    )
  }
}

export default App;
