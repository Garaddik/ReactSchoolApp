import {connect} from 'react-redux'
import WrapperTimetable from '../components/layouts/v_timetable/WrapperTimetable'
import {allStandards} from '../actions/StandardAction'
import {createTimetable_v2} from '../actions/TimetableAction'

function mapStateToProps(state){
  return{
    school: state.school,
    standards: state.standards,
    subjects: state.subjects,
    standardTimetable : state.standardTimetable,
    associatedSubjects: state.associatedSubjects,
    actions:{
        allStandards: allStandards,
        createTimetable_v2: createTimetable_v2
    }
  } 
}
export default connect(mapStateToProps)(WrapperTimetable)
