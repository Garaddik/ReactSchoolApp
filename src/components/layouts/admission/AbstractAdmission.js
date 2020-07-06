import React, { Component } from 'react'
import StudentBasic from './StudentBasic'
import StudentMore from './StudentMore'
import StudentAdmission from './StudentAdmission'
import StudentAddress from './StudentAddress'
import { Message } from 'semantic-ui-react'
import moment from 'moment'
import './StudentAdmission.css'


class AbstractAdmission extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: undefined,
            studentMore: undefined,
            studentAdmission: undefined,
            studentAddress: undefined,
            documentsRequest: undefined,
            selectedStandardId: '',
            pageDisplay: 1,
            errorMessage: '',
            successMessage: ''
        }
        this.secondToFirstPage = this.secondToFirstPage.bind(this)
        this.secondToThirdPage = this.secondToThirdPage.bind(this)
        this.firstToSecondPage = this.firstToSecondPage.bind(this)
        this.thirdToSecondPage = this.thirdToSecondPage.bind(this)
        this.thirdPage = this.thirdPage.bind(this)
        this.fourthToThird = this.fourthToThird.bind(this)
        this.thirdToFourth = this.thirdToFourth.bind(this)
        this.submitStudentForm = this.submitStudentForm.bind(this)

    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allStandards(school.schoolId))
    }

    submitStudentForm(selectedStandardId, studentAddress) {
        this.setState({
            studentAddress: studentAddress,
            selectedStandardId: selectedStandardId
        })
        let student = this.state.student
        student.dob = student.dob.format('YYYY-MM-DD')
        let studentAdmission = this.state.studentAdmission
        studentAdmission.admissionDate = studentAdmission.admissionDate.format('YYYY-MM-DD')
        var request = {
            studentRequestInfo: student,
            studentMore: this.state.studentMore,
            studentAdmission: studentAdmission,
            address: studentAddress,
            documentsRequest: studentAdmission.documentsRequest
        }
        const { actions, school } = this.props
        let response = actions.submitStudentForm(school.schoolId, selectedStandardId, request)
        student.dob = moment(student.dob, "YYYY-MM-DD")
        studentAdmission.admissionDate = moment(studentAdmission.admissionDate, "YYYY-MM-DD")
        response.then(function (response) {
            if (response) {
                if (response.status === 200) {
                    this.setState({
                        student: undefined,
                        studentMore: undefined,
                        studentAdmission: undefined,
                        studentAddress: undefined,
                        selectedStandardId: '',
                        pageDisplay: 1,
                        errorMessage: '',
                        successMessage: "Student form submitted successfully"
                    })
                } else {
                    this.setState({
                        errorMessage: "Unable to submit student form",
                        successMessage: ''
                    })
                }
                setTimeout(() => {
                    this.setState({
                        successMessage : '',
                    })
                  },3000)
            }
        }.bind(this))

    }
    fourthToThird(studentAddress) {
        this.setState({
            studentAddress: studentAddress,
            pageDisplay: 3
        })
    }

    secondToFirstPage(studentMore) {
        this.setState({
            studentMore: studentMore,
            pageDisplay: 1
        })
    }

    secondToThirdPage(studentMore) {
        this.setState({
            studentMore: studentMore,
            pageDisplay: 3
        })
    }

    firstToSecondPage(student) {
        this.setState({
            student: student,
            pageDisplay: 2
        })
    }

    thirdToSecondPage(studentAdmission) {
        this.setState({
            studentAdmission: studentAdmission,
            pageDisplay: 2
        })
    }

    thirdPage(studentMore) {
        this.setState({
            studentMore: studentMore,
            pageDisplay: 3
        })
    }

    thirdToFourth(studentAdmission) {
        this.setState({
            studentAdmission: studentAdmission,
            pageDisplay: 4
        })
    }

    render() {

        return (
            <div>
                <h3 className='ui dividing header'> Admission Panel</h3>
                {this.state.errorMessage !== '' && <Message size='small' color="red">{this.state.errorMessage}</Message>}
                {this.state.successMessage !== '' && <Message size='small' color="green">{this.state.successMessage}</Message>}
                {
                    this.state.pageDisplay === 1 &&
                    <StudentBasic firstToSecondPage={this.firstToSecondPage} student={this.state.student} />
                }
                {
                    this.state.pageDisplay === 2 &&
                    <StudentMore
                        secondToFirstPage={this.secondToFirstPage}
                        secondToThirdPage={this.secondToThirdPage}
                        studentMore={this.state.studentMore}
                    />
                }
                {
                    this.state.pageDisplay === 3 &&
                    <StudentAdmission
                        thirdToSecondPage={this.thirdToSecondPage}
                        thirdToFourth={this.thirdToFourth}
                        studentAdmission={this.state.studentAdmission}
                        actions = {this.props.actions}
                        school= {this.props.school}
                    />
                }
                {
                    this.state.pageDisplay === 4 &&
                    <StudentAddress
                        studentAddress={this.state.studentAddress}
                        fourthToThird={this.fourthToThird}
                        standards={this.props.standards}
                        selectedStandardId={this.state.selectedStandardId}
                        submitStudentForm={this.submitStudentForm}
                    />
                }
            </div>
        )
    }
}

export default AbstractAdmission