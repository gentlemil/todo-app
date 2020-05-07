import React, { Component } from 'react';
import uniqid from 'uniqid';
import Countdown from './Countdown';
import EditEvent from './EditEvent';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        { id: 0, name: 'breakfast', hour: 7, minute: 0 },
        { id: 1, name: 'lunch', hour: 15, minute: 0 },
        { id: 2, name: 'practise', hour: 20, minute: 0 },
      ],
      editedEvent: {
        id: uniqid(),
        name: '',
        hour: -1,
        minute: -1
        // czas nie moze byc ujemny, dlatego przyjmujemy -1 (nie bedzie on wyswietlany wtedy w ogole)
      }
    };
  }

  handleEditEvent = val => {
    // console.log(val)
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      };
    });
  }

  // handleSaveEvent = () => {
  //   this.setState(prevState => ({
  //     events: [...prevState.events, prevState.editedEvent],
  //     editedEvent: {
  //       id: uniqid(),
  //       name: '',
  //       hour: '',
  //       minute: ''
  //     }
  //   }));
  // }

  handleSaveEvent = () => {
    this.setState(prevState => {
      const editedEventExists = prevState.events.find(
        el => el.id === prevState.editedEvent.id
      );
      // console.log(editedEventExists);
      let updatedEvents;
      if (editedEventExists) {
        updatedEvents = prevState.events.map(el => {
          if (el.id === prevState.editedEvent.id) return prevState.editedEvent;
          else return el;
        });
      } else {
        updatedEvents = [...prevState.events, prevState.editedEvent];
      }
      return {
        events: updatedEvents,
        editedEvent: { id: uniqid(), name: '', hour: -1, minute: -1 }
      };
    });
  }

  handleRemoveEvent = id => {
    this.setState(prevState => ({
      events: prevState.events.filter(el => el.id !== id)
    }))
  }

  // handleEditInit = id => {    //init od initialize czyli rozpocznij (rozp. edycje wydarzenia)
  //   this.setState(prevState => ({
  //     // editedEvent: prevState.events[id]   // to nie kopia tylko referencja do naszego obiektu
  //     editedEvent: { ...prevState.events[id] }   // teraz tworzony jest nowy obiekt
  //   }));
  // }

  handleEditInit = id => {
    this.setState(prevState => ({
      editedEvent: { ...prevState.events.find(el => el.id === id) }
      // wyszukujemy po id wiec metoda wyszukuje obiekty sprawdzajac czy maja takie same id jak to wysylane do funkcji
      //spread operator i wasy uzyte analog. jak wyzej aby stworzyc nowy edytowalny obiekt a nie korzystac z referencji
      // 'oryginalnego' obiektu
    }));
  }

  render() {
    const events = this.state.events.map(el => {
      return (
        <Countdown
          key={el.id}   //informacja dla Reacta
          id={el.id}    //informacja dla naszego komponentu
          name={el.name}
          hour={el.hour}
          minute={el.minute}
          onRemove={id => this.handleRemoveEvent(id)}
          onEditInit={id => this.handleEditInit(id)}
        />
      );
    });

    return (
      <div className='app'>
        {events}
        <EditEvent
          name={this.state.editedEvent.name}
          hour={this.state.editedEvent.hour}
          minute={this.state.editedEvent.minute}
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => this.handleSaveEvent()}
        />
      </div>
    )
  }
}

export default App;
