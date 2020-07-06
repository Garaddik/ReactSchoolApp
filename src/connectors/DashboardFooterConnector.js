import {connect} from 'react-redux'
import DashboardFooter from '../components/commons/templates/dashboard/DashboardFooter'

function mapStateToProps(state){
  return{
    school:state.school
  } 
}

export default connect(mapStateToProps)(DashboardFooter)
