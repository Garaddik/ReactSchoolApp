import { connect } from 'react-redux'
import Template from '../components/layouts/template/Template'
import { updateSchool, fetchSchool } from '../actions/LoginAction'
import { addTemplate, getSelectedSchoolTemplate, updateTemplate, addAddress, updateAddress,uploadTemplateLogo } from '../actions/SchoolTemplateAction'

function mapStateToProps(state) {
  return {
    school: state.school,
    schoolTemplate: state.schoolTemplate,
    actions: {
      updateSchool: updateSchool,
      fetchSchool: fetchSchool,
      addTemplate: addTemplate,
      getSelectedSchoolTemplate: getSelectedSchoolTemplate,
      updateTemplate: updateTemplate,
      addAddress: addAddress,
      updateAddress: updateAddress,
      uploadTemplateLogo:uploadTemplateLogo
    }
  }
}

export default connect(mapStateToProps)(Template)