import {connect} from 'react-redux'
import Attendance from '../components/layouts/attendance/Attendance'
import {allStandards} from '../actions/StandardAction'
import {allStudentsAttendance} from '../actions/AttendanceAction'
import {getAllSubjects} from '../actions/SubjectAction'

function mapStateToProps(state){
  return{
    school: state.school,
    standards: state.standards,
    subjects: state.subjects,
    studentAttendanceList : state.studentAttendanceList,
    actions:{
        allStandards:allStandards,
        allStudentsAttendance: allStudentsAttendance,
        getAllSubjects: getAllSubjects
    }
  } 
}
export default connect(mapStateToProps)(Attendance)
