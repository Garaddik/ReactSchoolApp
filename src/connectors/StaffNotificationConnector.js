import {connect} from 'react-redux'
import StaffNotification from '../components/layouts/notification/StaffNotification'
import {notifyStaff, uploadNotificationFile} from '../actions/NotificationAction'

function mapStateToProps(state){
  return{
    school: state.school,
    actions:{
      notifyStaff: notifyStaff,
      uploadNotificationFile: uploadNotificationFile
    }
  } 
}

export default connect(mapStateToProps)(StaffNotification)
