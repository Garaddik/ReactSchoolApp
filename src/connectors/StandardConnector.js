import {connect} from 'react-redux'
import Standards from '../components/layouts/standards/Standards'
import {addStandard, allStandards, updateStandard, deleteStandard} from '../actions/StandardAction'

function mapStateToProps(state){
  return{
      standards: state.standards,
      school: state.school,
    actions:{
        addStandard: addStandard,
        allStandards:allStandards,
        updateStandard:updateStandard,
        deleteStandard:deleteStandard
    }
  } 
}

export default connect(mapStateToProps)(Standards)
