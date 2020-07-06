import {connect} from 'react-redux'
import WrapperTimetable from '../components/layouts/timetable/WrapperTimetable'
import {allStandards} from '../actions/StandardAction'
import {getAllSubjects} from '../actions/SubjectAction'
import{createTimetable, getStandardTimetable, updateStandardTimetable, deleteTimetable} from '../actions/TimetableAction'

function mapStateToProps(state){
  return{
    school: state.school,
    standards: state.standards,
    subjects: state.subjects,
    standardTimetable : state.standardTimetable,
    associatedSubjects: state.associatedSubjects,
    activeYear : state.activeYear,
    actions:{
        allStandards:allStandards,
        getAllSubjects:getAllSubjects,
        createTimetable:createTimetable,
        getStandardTimetable:getStandardTimetable,
        updateStandardTimetable:updateStandardTimetable,
        deleteTimetable:deleteTimetable
    }
  } 
}
export default connect(mapStateToProps)(WrapperTimetable)
