import {connect} from 'react-redux'
import StudentsWrapper from '../components/layouts/students/StudentsWrapper'
import {addStudent, allStudents,updateStudent, getStudentDetails, deleteStudent, updateStudentMoreInfo} from '../actions/StudentAction'
import {allStandards} from '../actions/StandardAction'
import {promoteStudents} from '../actions/PromoteStudentsAction'
import {getStudentAddress, addStudentAddress, updateStudentAddress} from '../actions/StudentAddressAction'

function mapStateToProps(state){
  return{
    students: state.students,
    school: state.school,
    standards: state.standards,
    studentDetails:state.studentDetails,
    years: state.years,
    activeYear: state.activeYear,
    studentAddress : state.studentAddress,
    actions:{
        addStudent: addStudent,
        allStudents:allStudents,
        updateStudent:updateStudent,
        allStandards:allStandards,
        getStudentDetails:getStudentDetails,
        deleteStudent: deleteStudent,
        promoteStudents:promoteStudents,
        updateStudentMoreInfo:updateStudentMoreInfo,
        getStudentAddress:getStudentAddress,
        addStudentAddress:addStudentAddress,
        updateStudentAddress:updateStudentAddress
    }
  } 
}
export default connect(mapStateToProps)(StudentsWrapper)