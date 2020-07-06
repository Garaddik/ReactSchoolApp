import {connect} from 'react-redux'
import DashboardHeader from '../components/commons/templates/dashboard/DashboardHeader'

function mapStateToProps(state){
  return{
    school:state.school
  } 
}

export default connect(mapStateToProps)(DashboardHeader)
