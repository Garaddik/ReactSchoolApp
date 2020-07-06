import React, { Component } from 'react'
import Notifications from './Notifications'

class WrapperInboxNotification extends Component {
    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allNotifications(school.schoolId, school.schoolAdmins[0].saId))
    }
    render() {

        const { notifications } = this.props
        return (
            <Notifications notifications={notifications} />
        )
    }
}

export default WrapperInboxNotification