import React, { Component } from "react"
import TemplateDetails from './TemplateDetails'

class SchoolHomePage extends Component {

  componentDidMount() {
    const { actions, dispatch } = this.props
    const schoolId = this.props.match.params.schoolId
    dispatch(actions.getSelectedSchoolTemplate(schoolId))
  }
  render() {
    const { school, schoolTemplate } = this.props
    return (
      <TemplateDetails school={school} schoolTemplate={schoolTemplate} />
    )
  }
}
export default SchoolHomePage
