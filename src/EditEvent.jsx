import React from 'react';

const EditEvent = props => {
    return (
        <div className='edit-event'>
            <div className='edit-event__input-group'>
                <label htmlFor='name'>name: </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={e => props.onInputChange({ [e.target.name]: e.target.value })}    //przyjmowany jest jeden obiekt, wiec tworzymy obiekt
                // onChange={e => console.log(e.target.name, e.target.value)}
                />
            </div>
            <div className='edit-event__input-group'>
                <label htmlFor='name'>hour: </label>
                <input
                    type='text'
                    id='hour'
                    name='hour'
                    onChange={e => props.onInputChange({ [e.target.name]: e.target.value })}    //przyjmowany jest jeden obiekt, wiec tworzymy obiekt
                // onChange={e => console.log(e.target.name, e.target.value)}
                />
            </div>
            <div className='edit-event__input-group'>
                <label htmlFor='name'>minute: </label>
                <input
                    type='text'
                    id='minute'
                    name='minute'
                    onChange={e => props.onInputChange({ [e.target.name]: e.target.value })}    //przyjmowany jest jeden obiekt, wiec tworzymy obiekt
                // onChange={e => console.log(e.target.name, e.target.value)}
                />
            </div>
            <button onClick={() => props.onSave()} >ok</button>
            <button>cancel</button>
        </div>
    )
};

export default EditEvent;