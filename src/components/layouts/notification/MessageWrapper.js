import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import StaffNotificationConnector from '../../../connectors/StaffNotificationConnector'
import StudentNotificationConnector from '../../../connectors/StudentNotificationConnector'
import WrapperInboxNotificationConnector from '../../../connectors/WrapperInboxNotificationConnector'
import './Notification.css'

const panes = [
  { menuItem: 'Staff Notification', render: () => <Tab.Pane attached={false}><StaffNotificationConnector /></Tab.Pane> },
  { menuItem: 'Student Notification', render: () => <Tab.Pane attached={false}><StudentNotificationConnector /></Tab.Pane> },
  { menuItem: 'Sent Items', render: () => <Tab.Pane attached={false}><WrapperInboxNotificationConnector /></Tab.Pane> },
]

export default class MessagingWrapper extends Component {
  render(){
    return(
      <Tab menu={{ color :'teal', secondary: true, pointing: true }} panes={panes} />
    )
  }
}
