import React, { Component } from 'react';

export default class ButtonsComponent extends Component {
    render() {
        return <div className='buttons'>
            <div className='btn-group'>
                <button type='button' className='btn btn-primary'>Button A</button>
                <button type='button' className='btn btn-primary'>Button B</button>
            </div>
        </div>
    }
}
