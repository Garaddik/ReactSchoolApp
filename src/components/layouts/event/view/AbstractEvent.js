import React, { Component } from 'react';
import Events from './Events'

class AbstractEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 1
        }

    }

    render() {
        return (
            <div className="class-name">
                <h3 className='ui dividing header'> Event Gallery</h3>
                <Events {...this.props} parentMethod={this.viewType} />
            </div>
        );
    }
}

export default AbstractEvent