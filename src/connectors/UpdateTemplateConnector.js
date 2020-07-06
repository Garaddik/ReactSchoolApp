import {connect} from 'react-redux'
import  UpdateSchoolTemplate from '../components/layouts/school-template/UpdateSchoolTemplate'
import {fileUploadHandler} from '../actions/SchoolTemplateAction'

function mapStateToProps(state){
  return{
    schoolTemplate: state.schoolTemplate,
    imagePath: state.imagePath,
    school:state.school,
    actions:{
      fileUploadHandler: fileUploadHandler
    }
  } 
}
export default connect(mapStateToProps)(UpdateSchoolTemplate)
