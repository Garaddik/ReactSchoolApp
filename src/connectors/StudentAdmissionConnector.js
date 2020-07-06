import { connect } from 'react-redux'
import AbstractionAdmission from '../components/layouts/admission/AbstractAdmission'
import { allStandards } from '../actions/StandardAction'
import { submitStudentForm, uploadNotificationFile } from '../actions/AdmissionAction'

function mapStateToProps(state) {
  return {
    school: state.school,
    standards: state.standards,
    selectedEducationYear: state.selectedEducationYear,
    actions: {
      allStandards: allStandards,
      submitStudentForm: submitStudentForm,
      uploadNotificationFile: uploadNotificationFile
    }
  }
}
export default connect(mapStateToProps)(AbstractionAdmission)
