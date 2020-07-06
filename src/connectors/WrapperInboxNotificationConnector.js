import {connect} from 'react-redux'
import  WrapperInboxNotification from '../components/layouts/notification/inbox/WrapperInboxNotification'
import {allNotifications} from '../actions/NotificationAction'

function mapStateToProps(state){
  return{
    school:state.school,
    notifications: state.notifications,
    actions:{
      allNotifications: allNotifications
    }
  } 
}

export default connect(mapStateToProps)(WrapperInboxNotification)
