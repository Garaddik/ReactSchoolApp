import {connect} from 'react-redux'
import Maps from '../components/layouts/busTracking/Maps'
import {getAllTracks, getDriverDetails} from '../actions/MapsAction'

function mapStateToProps(state){
  return{
    school: state.school,
    tracks:state.tracks,
    driverDetails:state.driverDetails,
    actions:{
      getAllTracks:getAllTracks,
      getDriverDetails:getDriverDetails
    }
  } 
}

export default connect(mapStateToProps)(Maps)
