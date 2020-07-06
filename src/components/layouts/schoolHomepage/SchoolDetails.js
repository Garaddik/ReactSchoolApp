import React, { Component } from "react"
import './SchoolHomePage.css'

class SchoolDetails extends Component {

  render() {
    const { schoolTemplate } = this.props
    return (
      <div className="ui column grid">
        <div className="column">
          <div className="ui raised segment">
            <label className="ui teal ribbon label">School Title</label>
            <p className="school-text-size-header">{schoolTemplate.title}</p>
            <label className="ui teal ribbon label">School Description</label>
            <p className="school-text-size-description">{schoolTemplate.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SchoolDetails
