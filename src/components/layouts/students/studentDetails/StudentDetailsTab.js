import React, { Component } from 'react'
import { Tab, Button, Icon } from 'semantic-ui-react'
import StudentMore from './StudentMore'
import StudentBasic from './StudentBasic'
import StudentAdmission from './StudentAdmission'
import StudentAddress from './StudentAddress'

export default class StudentDetailsTab extends Component {

    render() {
        const { student, dispatch, actions, studentDetails, loadStudentListView, school, studentAddress } = this.props
        return (
            <div>
                <div className='ui dividing header' style={{ display: 'flex', marginTop: '-25px' }}>
                    <Button icon className="back-button" type="button"
                        onClick={() => loadStudentListView()}>
                        <Icon name='arrow left' />
                    </Button>
                    <h3> {student.firstName  + '\'s Details'} </h3>
                </div>
                <Tab menu={{ color: 'teal', secondary: true, pointing: true }}
                    panes={[
                        {
                            menuItem: 'Student Details', render: () =>
                                <Tab.Pane attached={false}>
                                    <StudentBasic school = {school} dispatch={dispatch}
                                    actions={actions} student={studentDetails} />
                                </Tab.Pane>
                        },
                        {
                            menuItem: 'More info', render: () =>
                                <Tab.Pane attached={false}>
                                    <StudentMore school = {school} dispatch={dispatch}
                                    actions={actions} student={studentDetails} />
                                </Tab.Pane>
                        },
                        {
                            menuItem: 'Address', render: () =>
                                <Tab.Pane attached={false}>
                                    <StudentAddress school = {school} dispatch={dispatch}
                                    actions={actions} student={studentDetails}
                                    studentAddress={studentAddress}/>
                                </Tab.Pane>
                        },
                        {
                            menuItem: 'Admission Details', render: () =>
                                <Tab.Pane attached={false}>
                                    <StudentAdmission />
                                </Tab.Pane>
                        },
                    ]}
                />
            </div>
        )
    }
}