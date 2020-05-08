// import React from 'react';
// import Countdown from '../Countdown/Countdown'
// import './ListEvent.scss';

// class ListEvent extends React.PureComponent {

//     render() {

//         const events = this.state.events.map(el => {
//             return (
//                 <Countdown
//                     key={el.id}   //informacja dla Reacta
//                     id={el.id}    //informacja dla naszego komponentu
//                     name={el.name}
//                     hour={el.hour}
//                     minute={el.minute}
//                     details={el.details}
//                     timeNow={this.state.now}
//                     onRemove={id => this.handleRemoveEvent(id)}
//                     onEditInit={id => this.handleEditInit(id)}

//                 />
//             );
//         });

//         return (
//             <div className='list-events'>
//                 {events}
//             </div>
//         )
//     }
// }

// export default ListEvent;
