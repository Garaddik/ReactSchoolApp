import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Students from './Students'
import StudentDetailsTab from './studentDetails/StudentDetailsTab'
import { Message } from 'semantic-ui-react'

class StudentData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 1,
            student: {},
            updated: false,
            visible: true,
            standardId: ''
        }
        this.loadStudentDetails = this.loadStudentDetails.bind(this)
        this.loadStudentListView = this.loadStudentListView.bind(this)
    }

    loadStudentListView = () => {
        this.setState({
            view: 1
        })
    }

    loadStudentDetails = (student, standardId) => {
        const { school, actions, dispatch } = this.props
        dispatch(actions.getStudentDetails(school.schoolId, student.studentId))
        this.setState({
            view: 2,
            student: student,
            standardId: standardId
        })
    }

    deleteStudent = (student, standardId) => {
        const { school, actions, dispatch, activeYear } = this.props
        dispatch(actions.deleteStudent(school.schoolId, student.studentId, standardId, activeYear.eduYearId))
    }

    render() {
        const { dispatch, actions, students, school, standards, studentDetails, studentAddress } = this.props
        return (
            <div>
                {
                    this.state.view === 2 && this.state.updated === true && this.state.visible === true &&
                    <Message success >
                        <Message.Header>Student Details Updated</Message.Header>
                        {setTimeout(() => {
                            this.setState({ visible: false })
                        }, 5000)}
                    </Message>
                }
                {
                    this.state.view === 1 &&
                    <Students dispatch={dispatch} actions={actions} students={students} school={school}
                        standards={standards} loadStudentDetails={this.loadStudentDetails}
                        deleteStudent={this.deleteStudent}
                        loadStudentListView={this.loadStudentListView} standardId={this.state.standardId}
                        activeYear={this.props.activeYear}
                    />
                }

                {

                    this.state.view === 2 &&
                    <StudentDetailsTab
                        dispatch={dispatch} actions={actions}
                        school={this.props.school} studentDetails={studentDetails}
                        editStudentDetails={this.editStudentDetails} updated={this.state.updated}
                        loadStudentListView={this.loadStudentListView} student={this.state.student}
                        studentAddress={studentAddress} />
                }
            </div>
        )
    }
}

StudentData.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standards: PropTypes.array,
    activeYear: PropTypes.object
}

export default StudentData