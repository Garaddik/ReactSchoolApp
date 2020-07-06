import {connect} from 'react-redux'
import HomeFooter from '../components/commons/templates/home/HomeFooter'

function mapStateToProps(state){
  return{
    school:state.school
  } 
}

export default connect(mapStateToProps)(HomeFooter)
