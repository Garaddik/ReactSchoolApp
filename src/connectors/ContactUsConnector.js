import {connect} from 'react-redux'
import ContactUs from '../components/layouts/contact/Contact'
import {addContactUs} from '../actions/ContactUsAction'

function mapStateToProps(state){
  return{
    actions:{
        addContactUs: addContactUs
    }
  } 
}

export default connect(mapStateToProps)(ContactUs)
