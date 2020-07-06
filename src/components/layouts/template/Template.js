import React, { Component } from 'react'
import TemplateSchool from './School/TemplateSchool'
import AbstractTemplate from './template_abstract/AbstractTemplate'
import AbstractAddress from './address/AbstractAddress'

class Template extends Component {

    constructor(props){
        super(props)
        this.state = {
            schoolId : this.props.school.schoolId
        }
    }

    componentDidMount() {
        const{ actions, dispatch, school } = this.props
        dispatch(actions.getSelectedSchoolTemplate(school.schoolId))
      }

    componentDidUpdate(prevProps) {
      const{ actions, dispatch } = this.props
      if (this.props.school.schoolId !== prevProps.school.schoolId) {
          dispatch(actions.getSelectedSchoolTemplate(this.props.school.schoolId))
      }
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className='ui dividing header'> School</h3>
                    <TemplateSchool school={this.props.school} dispatch={this.props.dispatch}
                    actions={this.props.actions} />
                    <div className='ui dividing' />
                </div>
                <div className="ui dividing  class-name hieght-space">
                    <h3 className='ui dividing header'> Template</h3>
                    <AbstractTemplate school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                    dispatch={this.props.dispatch} actions={this.props.actions} />
                    <div className='ui dividing' />
                </div>
                <div className="ui dividing  class-name hieght-space">
                    <h3 className='ui dividing header'> Address</h3>
                    <AbstractAddress school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                    dispatch={this.props.dispatch} actions={this.props.actions} />
                    <div className='ui dividing' />
                    <div className="bottom-space" />
                </div>
            </div>
        );
    }
}

export default Template