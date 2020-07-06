import {connect} from 'react-redux'
import HomepageLayout from '../components/layouts/home/HomePageBody1'
import {fetchSchools} from '../actions/SchoolAction'

function mapStateToProps(state){
  return{
    schools: state.schools,
    actions:{
      fetchSchools: fetchSchools
    }
  } 
}

export default connect(mapStateToProps)(HomepageLayout)
