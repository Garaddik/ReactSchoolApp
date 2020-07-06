import {connect} from 'react-redux'
import WrapperNonTeachingStaff from '../components/layouts/nonteachingstaffs/WrapperNonTeachingStaff'
import {addNonTeachingStaff, allNonTeachingStaffs, updateNonTeachingStaff, deleteNonTeachingStaff} from '../actions/NonTeachingStaffAction'

function mapStateToProps(state){
  return{
    nonTeachingStaffs: state.nonTeachingStaffs,
    school: state.school,
    actions:{
        addNonTeachingStaff: addNonTeachingStaff,
        allNonTeachingStaffs:allNonTeachingStaffs,
        updateNonTeachingStaff:updateNonTeachingStaff,
        deleteNonTeachingStaff:deleteNonTeachingStaff
    }
  } 
}

export default connect(mapStateToProps)(WrapperNonTeachingStaff)
