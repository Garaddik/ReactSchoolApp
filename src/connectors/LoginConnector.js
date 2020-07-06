import {connect} from 'react-redux'
import LoginRedirect from '../components/layouts/login/LoginRedirect'
import {fetchSchool,updateSchool, getAcademicYear} from '../actions/LoginAction'

function mapStateToProps(state){
  return{
    school:state.school,
    year : state.school,
    actions:{
      fetchSchool: fetchSchool,
      updateSchool: updateSchool,
      getAcademicYear:getAcademicYear
    }
  } 
}

export default connect(mapStateToProps)(LoginRedirect)
