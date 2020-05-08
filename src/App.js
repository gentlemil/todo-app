import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

import uniqid from 'uniqid';

import Countdown from './components/Countdown/Countdown';
import EditEvent from './components/EditEvent/EditEvent';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      now: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      },
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
      },
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  timer = () => {
    this.setState({
      now: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      }
    });
  }

  componentDidMount() {
    const storageEvents = JSON.parse(localStorage.getItem('events')) || [];
    this.setState({ events: storageEvents })
    console.log(storageEvents)
    const intervvalId = setInterval(this.timer, 1000);
    this.setState({ intervvalId: intervvalId })
  }


  handleEditEvent = val => {
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      };
    },
      () => localStorage.setItem('events', JSON.stringify(this.state.events)));
  }

  handleSaveEvent = () => {
    this.setState(prevState => {
      const editedEventExists = prevState.events.find(
        el => el.id === prevState.editedEvent.id
      );
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
    }),
      () => localStorage.setItem('events', JSON.stringify(this.state.events))
    );
  }

  handleEditInit = id => {
    this.setState(prevState => ({
      editedEvent: { ...prevState.events.find(el => el.id === id) }
      // wyszukujemy po id wiec metoda wyszukuje obiekty sprawdzajac czy maja takie same id jak to wysylane do funkcji
      //spread operator i wasy uzyte analog. jak wyzej aby stworzyc nowy edytowalny obiekt a nie korzystac z referencji
      // 'oryginalnego' obiektu
    }));
  }

  handleEditCancel = () => {
    this.setState({
      editedEvent: { id: uniqid(), name: '', hour: -1, minute: -1 }
    });
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }

    const events = this.state.events.map(el => {
      return (
        <Countdown
          key={el.id}   //informacja dla Reacta
          id={el.id}    //informacja dla naszego komponentu
          name={el.name}
          hour={el.hour}
          minute={el.minute}
          timeNow={this.state.now}
          onRemove={id => this.handleRemoveEvent(id)}
          onEditInit={id => this.handleEditInit(id)}

        />
      );
    });

    return (
      <div className='app'>

        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route component={EditEvent} path='/create' />
          </Switch>
        </Router>

        {events}
        <EditEvent
          name={this.state.editedEvent.name}
          hour={this.state.editedEvent.hour}
          minute={this.state.editedEvent.minute}
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => this.handleSaveEvent()}
          onCancel={() => this.handleEditCancel()}
        />
      </div>
    )
  }
}

export default App;
