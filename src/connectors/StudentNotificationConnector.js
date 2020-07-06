import {connect} from 'react-redux'
import StudentNotification from '../components/layouts/notification/StudentNotification'
import {allStandards} from '../actions/StandardAction'
import {notifyStudentsInStandard, notifyAllStudentsInSchool, uploadNotificationFile} from '../actions/NotificationAction'

function mapStateToProps(state){
  return{
    school: state.school,
    standards: state.standards,
    actions:{
        allStandards:allStandards,
        notifyStudentsInStandard: notifyStudentsInStandard,
        notifyAllStudentsInSchool:notifyAllStudentsInSchool,
        uploadNotificationFile: uploadNotificationFile
    }
  } 
}

export default connect(mapStateToProps)(StudentNotification)
