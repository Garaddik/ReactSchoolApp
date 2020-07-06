import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ViewSSS extends Component {

    constructor(props) {
        super(props)

        this.state = {
            subjectId: this.props.sssObject.subject.subjectId,
            staffId: this.props.sssObject.staff.staffId
        }
        this.deleteAssociatation = this.deleteAssociatation.bind(this);
    }

    deleteAssociatation() {

        const {dispatch,school, actions, sssObject,activeYear, selectedStandardId } = this.props

        dispatch(actions.deleteAssociatation(school.schoolId, selectedStandardId, activeYear.eduYearId, sssObject.sssId))
    }

    render() {

        const { subjects, staffs } = this.props

        return (
            <div>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='five fields'>
                            <div className={'ui four wide field '}>
                                <select disabled value={this.state.subjectId} className="ui dropdown ui compact menu ">
                                    <option className="default text" value={0}>Select Subject</option>
                                    {subjects && subjects.map(function (subject) {
                                        return (
                                            <option key={subject.name + subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className={'ui four wide field '}>
                                <select disabled value={this.state.staffId} className="ui dropdown ui compact menu ">
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
                            <div className='three wide field'>
                                <Button basic color='teal' type="button" onClick={this.deleteAssociatation}>Delete Associatation</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default ViewSSS