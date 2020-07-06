import {connect} from 'react-redux'
import HomeHeader from '../components/commons/templates/home/HomeHeader'
import {loginSuccess} from '../actions/SchoolAction'

function mapStateToProps(state){
  return{
    school:state.school,
    actions:{
      loginSuccess: loginSuccess
    }
  } 
}

export default connect(mapStateToProps)(HomeHeader)
