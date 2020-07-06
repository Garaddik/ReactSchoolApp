import {connect} from 'react-redux'
import AssociateStaff from '../../components/layouts/v_timetable/AssociateStaff'
import {getAllSubjects} from '../../actions/SubjectAction'
import {allStaffs} from '../../actions/StaffAction'
import {associate, getsss, deleteAssociatation} from '../../actions/TimetableAction'

function mapStateToProps(state){
  return{
    school: state.school,
    subjects: state.subjects,
    staffs: state.staffs,
    sss: state.sss,
    activeYear: state.activeYear,
    actions:{
        getAllSubjects: getAllSubjects,
        allStaffs:allStaffs,
        associate: associate,
        getsss: getsss,
        deleteAssociatation: deleteAssociatation
    }
  } 
}
export default connect(mapStateToProps)(AssociateStaff)
