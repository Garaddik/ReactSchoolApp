import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import { aidedUnaided } from '../../../commons/Constants'
import './StudentAdmission.css'

class StudentAdmission extends Component {

    constructor(props) {
        super(props)
        if (this.props.studentAdmission !== undefined) {
            this.state = this.props.studentAdmission
        } else {
            this.state = {
                enrolmentNumber: '',
                admissionDate: moment(),
                schoolCode: '',
                section: '',
                isAidedUnaided: 'Unaided',
                l1: '',
                l2: '',
                l3: '',
                bankName: '',
                accountName: '',
                accountNumber: '',
                bankIfscCode: '',
                documentsRequest: [],
                loadStatus: ''
            }
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleisAidedUnaided = this.handleisAidedUnaided.bind(this)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
        this.deleteDocument = this.deleteDocument.bind(this)
    }

    fileSelectedHandler(event) {
        this.setState({
            loadStatus: 'loading'
        })
        const { school, actions } = this.props
        if (event.target.files !== undefined) {
            let name = event.target.files[0].name
            const fileForm = new FormData()
            fileForm.append('file', event.target.files[0])

            console.log(name)

            let response = actions.uploadNotificationFile(school.schoolId, fileForm)

            response.then(function (response) {
                if (response) {
                    this.setState({
                        documentsRequest: [...this.state.documentsRequest, { path: response.filePath, name: name }],
                        loadStatus: ''
                    })

                    console.log(this.state.documentsRequest)
                }
            }.bind(this))
        }
    }

    deleteDocument(path) {
        let documents = this.state.documentsRequest.filter(function (el) { return el.path !== path; });
        this.setState({
            documentsRequest: documents
        })

    }

    handleNext() {
        this.props.thirdToFourth(this.state)
    }

    handleisAidedUnaided(event) {
        this.setState({
            isAidedUnaided: event.target.value
        })
    }

    handlePrevious() {
        this.props.thirdToSecondPage(this.state)
    }

    handleChange(field, value) {
        this.setState({ [field]: value });
    }

    handleChangeDate(admissionDate) {
        this.setState({
            admissionDate: admissionDate
        })
    }

    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="two fields">
                        <div className="four field">
                            <label>Enrollment Number</label>
                            <Input
                                value={this.state.enrolmentNumber}
                                onChange={(event) => this.handleChange('enrolmentNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>Admission Date</label>
                            <DatePicker
                                selected={this.state.admissionDate}
                                onChange={this.handleChangeDate}
                                dateFormat="DD-MM-YYYY"
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>School Code</label>
                            <Input
                                value={this.state.schoolCode}
                                onChange={(event) => this.handleChange('schoolCode', event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Section</label>
                            <Input
                                value={this.state.section}
                                onChange={(event) => this.handleChange('section', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>IsAidedUnaided</label>
                            <select onChange={this.handleisAidedUnaided} value={this.state.isAidedUnaided} className="ui dropdown ui compact menu ">
                                {aidedUnaided && aidedUnaided.map(function (name, id) {
                                    return (
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="four field">
                            <label>L1 </label>
                            <Input
                                value={this.state.l1}
                                onChange={(event) => this.handleChange('l1', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>L2</label>
                            <Input
                                value={this.state.l2} onChange={(event) => this.handleChange('l2', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>L3</label>
                            <Input
                                value={this.state.l3} onChange={(event) => this.handleChange('l3', event.target.value)} />
                        </div>
                    </div>
                    <h4 className='ui dividing header'> Attach Documents </h4>
                    {
                        this.state.documentsRequest &&
                        this.state.documentsRequest.map(function (document, idx) {
                            return (
                                <div key={idx} className="two fields">
                                    <div className="field" >
                                        <div > <a target="_blank" href={document.path}>{++idx + ". "} {document.name} </a> </div>
                                    </div>
                                    <div className="field" />
                                    {/*
                                    <div className="field">
                                        <div className="ui floating delete-img-css" onClick={this.deleteDocument.bind(null, document.path)}><Icon className="ui circular teal top right" name="trash" /></div>
                                    </div>
                                    */}
                                </div>
                            )
                        })
                    }
                    <div className="six fields">
                        <div className="field">
                            <input type="file" onChange={this.fileSelectedHandler} className="inputfile" id="embedpollfileinput" />

                            <label htmlFor="embedpollfileinput" className={"ui basic teal huge " + this.state.loadStatus + "  button"}>
                                <i className="ui upload icon"></i>
                                Upload Document
                        </label>
                        </div>
                    </div>
                    <h4 className='ui dividing header'> Bank Details</h4>
                    <div className="two fields">
                        <div className="four field">
                            <label>Bank Name </label>
                            <Input
                                value={this.state.bankName}
                                onChange={(event) => this.handleChange('bankName', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>Account Holder Name</label>
                            <Input
                                value={this.state.accountName} onChange={(event) => this.handleChange('accountName', event.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four field">
                            <label>Account Number</label>
                            <Input
                                value={this.state.accountNumber}
                                onChange={(event) => this.handleChange('accountNumber', event.target.value)} />
                        </div>
                        <div className="four field">
                            <label>Bank IFSC Code</label>
                            <Input
                                value={this.state.ifsc} onChange={(event) => this.handleChange('ifsc', event.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field previous-button-css">
                            <Button basic color='teal' type="button" onClick={this.handlePrevious}> <Icon name="angle left" />  Previous </Button>
                        </div>
                        <div className="field next-button-css">
                            <Button basic color='teal' type="button" onClick={this.handleNext}> Next <Icon name="angle right" /></Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudentAdmission