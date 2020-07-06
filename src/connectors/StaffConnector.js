import {connect} from 'react-redux'
import WrapperStaff from '../components/layouts/staffs/WrapperStaff'
import {addStaff, allStaffs, updateStaff, deleteStaff} from '../actions/StaffAction'

function mapStateToProps(state){
  return{
    staffs: state.staffs,
    school: state.school,
    actions:{
        addStaff: addStaff,
        allStaffs:allStaffs,
        updateStaff:updateStaff,
        deleteStaff:deleteStaff
    }
  } 
}

export default connect(mapStateToProps)(WrapperStaff)
