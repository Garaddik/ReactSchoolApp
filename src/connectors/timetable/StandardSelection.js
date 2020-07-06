import {connect} from 'react-redux'
import StandardSelection from '../../components/layouts/v_timetable/StandardSelection'
import {allStandards} from '../../actions/StandardAction'
import {createTimetable_v2} from '../../actions/TimetableAction'

function mapStateToProps(state){
  return{
    school: state.school,
    standards: state.standards,
    actions:{
        allStandards: allStandards,
        createTimetable_v2: createTimetable_v2
    }
  } 
}
export default connect(mapStateToProps)(StandardSelection)
