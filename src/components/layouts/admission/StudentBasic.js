import React, { Component } from 'react'
import { Button, Input, TextArea, Icon, Message } from 'semantic-ui-react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import './StudentAdmission.css'
import { bloodGroupList } from '../../../commons/Constants'

class StudentBasic extends Component {

    constructor(props) {
        super(props)
        if (this.props.student !== undefined) {
            this.state = this.props.student
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
                message: ''
            }
        }
        this.handleChangeBloodGroup = this.handleChangeBloodGroup.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
    }

    handleChangeBloodGroup(event) {
        this.setState({
            bloodGroup: event.target.value
        })
    }

    handleChangeDate(dob) {
        this.setState({
            dob: dob
        })
    }
    handleNext() {
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
                message: ''
            })
            this.props.firstToSecondPage(this.state)
        }
    }

    handleChange(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div>
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
                            <label>Email Name</label>
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
                    <div className="field next-button-css">
                        <Button basic color='teal' type="button" onClick={this.handleNext}> Next <Icon name="angle right" /></Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudentBasic