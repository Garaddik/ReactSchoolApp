import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class AssociateAddStaff extends Component {

    constructor(props) {
        super(props)

        this.state = {
            subjectError: '',
            subjectId: 0,
            staffId: 0,
            staffError: ''
        }
        this.associate = this.associate.bind(this);
        this.selectSubject = this.selectSubject.bind(this);
        this.selectStaff = this.selectStaff.bind(this);
        this.deleteAssociatation = this.deleteAssociatation.bind(this);
    }

    deleteAssociatation() {

    }

    selectStaff = (event) => {

        this.setState({
            staffId: event.target.value
        })
    }

    associate() {

        if (this.state.subjectId === 0) {
            this.setState({
                subjectError: 'error'
            })
        } else if (this.state.staffId === 0) {
            this.setState({
                staffError: 'error',
                subjectError: ''
            })
        } else {

            const { actions, dispatch, school, standardId, selectedEducationYear } = this.props

            dispatch(actions.associate(school.schoolId, standardId, this.state.subjectId, this.state.staffId, selectedEducationYear.eduYearId))

            this.setState({
                subjectId:0,
                staffId:0,
                staffError: '',
                subjectError:''
            })
        }


    }

    selectSubject = (event) => {

        this.setState({
            subjectId: event.target.value
        })
    }

    render() {

        const { subjectError, staffError } = this.state

        const { subjects, staffs } = this.props

        return (

            <div>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='five fields'>
                            <div className={'ui four wide field ' + subjectError}>
                                <select onChange={this.selectSubject} value={this.state.subjectId} className="ui dropdown ui compact menu ">
                                    <option className="default text" value={0}>Select Subject</option>
                                    {subjects && subjects.map(function (subject) {
                                        return (
                                            <option key={subject.name + subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className={'ui four wide field ' + staffError}>
                                <select onChange={this.selectStaff} value={this.state.staffId} className="ui dropdown ui compact menu ">
                                    <option className="default text" value={0}>Select Staff</option>
                                    {staffs && staffs.map(function (staff) {
                                        let name = staff.firstName
                                        if (staff.lastName !== undefined) {
                                            name = name + ' ' + staff.lastName
                                        }
                                        return (
                                            <option key={staff.firstName + staff.staffId} value={staff.staffId}>{name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className='two wide field'>
                                <Button basic color='teal' type="button" onClick={this.associate}>Add Association</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default AssociateAddStaff