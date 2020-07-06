import { connect } from 'react-redux'
import SchoolHomePage from '../components/layouts/schoolHomepage/SchoolHomePage'
import { getSelectedSchoolTemplate } from '../actions/SchoolTemplateAction'

function mapStateToProps(state) {
  return {
    school: state.school,
    schoolTemplate: state.schoolTemplate,
    actions: {
      getSelectedSchoolTemplate: getSelectedSchoolTemplate,
    }
  }
}

export default connect(mapStateToProps)(SchoolHomePage)