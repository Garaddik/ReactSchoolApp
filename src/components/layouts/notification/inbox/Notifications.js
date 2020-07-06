import React, { Component } from 'react'
import Notification from './Notification'

class Notifications extends Component {

    render() {

        const { notifications } = this.props

        return (
            <div>
                <h3 className='ui dividing header'>Sent Items</h3>
                <form className='ui form' name='form-data'>
                    <div className='field ui dividing header'>
                        <div className='five fields'>
                            <div className='one wide field'>
                                No.
                            </div>
                            <div className='five wide field'>
                                Title
                            </div>
                            <div className="five wide field">
                                Description
                            </div>
                            <div className='four wide field'>
                                Date & Time
                            </div>
                            <div className='four wide field'>
                                Sent By
                            </div>
                            <div className='two wide field'>
                                Actions
                            </div>
                        </div>
                    </div>
                    {
                        notifications && notifications.map(function (notification, idx) {
                            return (
                                <Notification notification={notification} key={idx} index={idx} />
                            )
                        })
                    }
                </form>
            </div>
        )
    }
}

export default Notifications