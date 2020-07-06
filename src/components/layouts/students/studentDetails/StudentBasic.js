import React, { Component } from 'react'
import { Input, TextArea, Message, Button } from 'semantic-ui-react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import './StudentAdmission.css'
import { bloodGroupList } from '../../../../commons/Constants'

class StudentBasic extends Component {

    constructor(props) {
        super(props)
        if (this.props.student) {
            this.state = {
                studentId: this.props.student.studentId,
                firstName: this.props.student.firstName ? this.props.student.firstName : '',
                lastName: this.props.student.lastName ? this.props.student.lastName : '',
                sats: this.props.student.sats ? this.props.student.sats : '',
                middleName: this.props.student.middleName ? this.props.student.middleName : '',
                email: this.props.student.email ? this.props.student.email : '',
                phoneNumber: this.props.student.phoneNumber ? this.props.student.phoneNumber : '',
                gender: this.props.student.gender ? this.props.student.gender : '',
                information: this.props.student.information ? this.props.student.information : '',
                bloodGroup: this.props.student.bloodGroup ? this.props.student.bloodGroup : 'O-',
                siblingName: this.props.student.siblingName ? this.props.student.siblingName : '',
                siblingClass: this.props.student.siblingClass ? this.props.student.siblingClass : '',
                parentName: this.props.student.parentName ? this.props.student.parentName : '',
                dob: this.props.student.dob ? moment(this.props.student.dob, "YYYY-MM-DD") : moment(),
                errorMessage: false,
                message: '',
                buttonState: true,
                visible : false
            }
        }
        else {
            this.state = {
                firstName: '',
                lastName: '',
                sats: '',
                middleName: '',
                email: '',
                phoneNumber: '',
                gender: '',
                information: '',
                bloodGroup: '',
                siblingName: '',
                sibLingClass: '',
                parentName: '',
                dob: moment(),
                errorMessage: false,
                message: '',
                buttonState: true,
                visible : false
            }
        }
        this.handleChangeBloodGroup = this.handleChangeBloodGroup.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.updateStudent = this.updateStudent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.student) {
            this.setState({
                studentId: nextProps.student.studentId,
                firstName: nextProps.student.firstName ? nextProps.student.firstName : '',
                lastName: nextProps.student.lastName ? nextProps.student.lastName : '',
                sats: nextProps.student.sats ? nextProps.student.sats : '',
                middleName: nextProps.student.middleName ? nextProps.student.middleName : '',
                email: nextProps.student.email ? nextProps.student.email : '',
                phoneNumber: nextProps.student.phoneNumber ? nextProps.student.phoneNumber : '',
                gender: nextProps.student.gender ? nextProps.student.gender : '',
                information: nextProps.student.information ? nextProps.student.information : '',
                bloodGroup: nextProps.student.bloodGroup ? nextProps.student.bloodGroup : 'O-',
                siblingName: nextProps.student.siblingName ? nextProps.student.siblingName : '',
                siblingClass: nextProps.student.siblingClass ? nextProps.student.siblingClass : '',
                parentName: nextProps.student.parentName ? nextProps.student.parentName : '',
                dob: nextProps.student.dob ? moment(nextProps.student.dob, "YYYY-MM-DD") : moment(),
            })
        }
    }

    handleChangeBloodGroup(event) {
        this.setState({
            bloodGroup: event.target.value
        })
    }

    handleChangeDate(dob) {
        console.log("dob", dob)
        this.setState({
            dob: dob
        })
    }

    updateStudent() {
        const { actions, school } = this.props
        if (this.state.firstName === '') {
            this.setState({
                errorMessage: true,
                message: "Mandatory field - 'First Name' required"
            })
        } else if (this.state.phoneNumber.trim().length !== 0 && this.state.phoneNumber.trim().length !== 10) {
            this.setState({
                errorMessage: true,
                message: "Invalid Phone number"
            })
        } else {
            this.setState({
                errorMessage: false,
                message: '',
            })
            let student = {
                ...this.state,
                dob: this.state.dob.format("YYYY-MM-DD")
            }
            let onSuccess = actions.updateStudent(school.schoolId, student)
            onSuccess.then(function(onSuccess) {
                if(onSuccess){
                    this.setState({
                        visible : true,
                        buttonState : true
                    })
                    setTimeout(() => {
                        this.setState({
                            visible : false
                        })
                      },3000)
                }
                else {
                    this.setState({
                        buttonState : false
                    })
                }
            }.bind(this))
        }
    }

    handleChange(field, value) {
        this.setState({
            [field]: value,
            buttonState: false
        });
        if (value === '') {
            this.setState({
                buttonState: true
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.visible &&
                    <Message positive>
                        <Message.Header>{this.state.firstName + '\'s'}  Basic Info Updated</Message.Header>
                    </Message>
                }
                {this.state.errorMessage && <Message size='small' color="red">{this.state.message}</Message>}
                <form className="ui form">
                    <div className="two fields">
                        <div className="four field">
                            <label>First Name</label>
                            <Input
                                value={this.state.firstName}
                                onChange={(event) => this.handleChange('firstName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>Last Name</label>
                            <Input
                                value={this.state.lastName}
                                onChange={(event) => this.handleChange('lastName', event.target.value)}

                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Middle Name</label>
                            <Input
                                value={this.state.middleName}
                                onChange={(event) => this.handleChange('middleName', event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>SATS Id</label>
                            <Input
                                value={this.state.sats}
                                onChange={(event) => this.handleChange('sats', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four field">
                            <label>Email ID</label>
                            <Input
                                value={this.state.email}
                                onChange={(event) => this.handleChange('email', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>Blood Group</label>

                            <select onChange={this.handleChangeBloodGroup} value={this.state.bloodGroup} className="ui dropdown ui compact menu ">
                                {bloodGroupList && bloodGroupList.map(function (name, id) {
                                    return (
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="two fields">
                        <div className="four field">
                            <label>Sibling Name</label>
                            <Input
                                value={this.state.siblingName} onChange={(event) => this.handleChange('siblingName', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>Sibling Class</label>
                            <Input
                                value={this.state.siblingClass} onChange={(event) => this.handleChange('siblingClass', event.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four field">
                            <label>Phone Number</label>
                            <Input type="number"
                                value={this.state.phoneNumber}
                                onChange={(event) => this.handleChange('phoneNumber', event.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four field">
                            <label>Parent Name</label>
                            <Input
                                value={this.state.parentName} onChange={(event) => this.handleChange('parentName', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>
                                DOB
                        </label>
                            <DatePicker
                                selected={this.state.dob}
                                onChange={this.handleChangeDate}
                                dateFormat="DD-MM-YYYY"
                            />
                        </div>

                    </div>
                    <div className="field">
                        <label>More information</label>
                        <TextArea
                            value={this.state.information} onChange={(event) => this.handleChange('information', event.target.value)} />
                    </div>
                </form>
                <div className="five wide field update-button-css">
                    <Button type='button' basic color='teal' onClick={this.updateStudent} disabled={this.state.buttonState}>
                        Update
                    </Button>
                </div>
            </div>
        )
    }
}

export default StudentBasic