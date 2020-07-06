import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { yesNo } from '../../../commons/Constants'

class StudentMore extends Component {
    constructor(props) {
        super(props)
        if (this.props.studentMore !== undefined) {

            this.state = this.props.studentMore
        } 
        else {
            this.state = {
                mediumOfInstruction: '',
                motherToungue: '',
                language1: '',
                language2: '',
                language3: '',
                fatherFirstName: '',
                fatherLastName: '',
                fatherMiddleName: '',
                motherFirstName: '',
                motherLastName: '',
                motherMiddleName: '',
                rteQuote: 'No',
                religion: '',
                aadharUidNumberStudent: '',
                aadharUidNumberFather: '',
                aadharUidNumberMother: '',
                parentName: '',
                socialCategory: '',
                subCategory: '',
                studentCastCertNumber: '',
                studentCastName: '',
                studentSubcastName: '',
                fatherCastCertNumber: '',
                fatherCastName: '',
                fatherSubcastName: '',
                motherCastCertNumber: '',
                motherCastName: '',
                motherSubcastName: '',
                bpl: '',
                bhagyalakshmiBondNumber: '',
                studentSpecialNeed: '',
                specialCategory: '',
                busPass: 'No',
                studentPhoneNumber: '',
                fatherPhoneNumber: '',
                motherPhoneNumber: '',
                studentEmail: '',
                fatherEmail: '',
                motherEmail: '',
                fatherAadharError: '',
                motherAadhaarError : '',
                studentAadhaaarError : '',
                fatherMobileError: '',
                motherMobileError : '',
                studentMobileError : ''
            }
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleChangeRteQuote = this.handleChangeRteQuote.bind(this)
        this.handleChangeBusPass = this.handleChangeBusPass.bind(this) 
    }

    handleChange(field, value) {
        this.setState({ [field]: value });
    }

    handleNext() {
        if(this.state.aadharUidNumberStudent.length !== 12 && this.state.aadharUidNumberStudent.length !== 0){
            this.setState({
                studentAadhaaarError : 'error'
            })
        }
        else if(this.state.aadharUidNumberFather.length !== 12 && this.state.aadharUidNumberFather.length !== 0){
            this.setState({
                fatherAadhaarError : 'error',
                studentAadhaaarError : ''
            })
        }
        else if(this.state.aadharUidNumberMother.length !== 12 && this.state.aadharUidNumberMother.length !== 0){
            this.setState({
                motherAadhaarError : 'error',
                fatherAadhaarError : '',
                studentAadhaaarError : ''
            })
        }
        else if(this.state.studentPhoneNumber.length !== 10 && this.state.studentPhoneNumber.length !== 0 ){
            this.setState({
                motherAadhaarError : '',
                studentMobileError : 'error'
            })
        }
        else if(this.state.fatherPhoneNumber.length !== 10 && this.state.fatherPhoneNumber.length !== 0 ){
            this.setState({
                studentMobileError : '',
                fatherMobileError : 'error'
            })
        }
        else if(this.state.motherPhoneNumber.length !== 10 && this.state.motherPhoneNumber.length !== 0 ){
            this.setState({
                fatherMobileError : '',
                studentMobileError : '',
                motherMobileError : 'error'
            })
        }
        else{
            this.props.secondToThirdPage(this.state)
        }
    }

    handlePrevious() {
        this.props.secondToFirstPage(this.state)
    }

    handleChangeBusPass(event) {
        this.setState({
            busPass: event.target.value
        })
    }

    handleChangeRteQuote(event) {
        this.setState({
            rteQuote: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="two fields">
                        <div className="four field">
                            <label>Medium Of Instruction</label>
                            <Input
                                value={this.state.mediumOfInstruction}
                                onChange={(event) => this.handleChange('mediumOfInstruction', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>Mother Toungue </label>
                            <Input
                                value={this.state.motherToungue}
                                onChange={(event) => this.handleChange('motherToungue', event.target.value)}

                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Language 1</label>
                            <Input
                                value={this.state.language1}
                                onChange={(event) => this.handleChange('language1', event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Language 2</label>
                            <Input
                                value={this.state.language2}
                                onChange={(event) => this.handleChange('language2', event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Language 3</label>
                            <Input
                                value={this.state.language3}
                                onChange={(event) => this.handleChange('language3', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Father's First Name</label>
                            <Input
                                value={this.state.fatherFirstName}
                                onChange={(event) => this.handleChange('fatherFirstName', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Father's Middle Name</label>
                            <Input
                                value={this.state.fatherMiddleName}
                                onChange={(event) => this.handleChange('fatherMiddleName', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Father's Last Name</label>
                            <Input
                                value={this.state.fatherLastName}
                                onChange={(event) => this.handleChange('fatherLastName', event.target.value)} />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Mother's First Name</label>
                            <Input
                                value={this.state.motherFirstName}
                                onChange={(event) => this.handleChange('motherFirstName', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Mother's Middle Name</label>
                            <Input
                                value={this.state.motherMiddleName}
                                onChange={(event) => this.handleChange('motherMiddleName', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Mother's Last Name</label>
                            <Input
                                value={this.state.motherLastName}
                                onChange={(event) => this.handleChange('motherLastName', event.target.value)} />
                        </div>
                    </div>
                    <div className="three fields">

                        <div className="four field">
                            <label>Religion</label>
                            <Input
                                value={this.state.religion}
                                onChange={(event) => this.handleChange('religion', event.target.value)} />
                        </div>
                        <div className="two field">
                            <label>Child admitted under RTE quote</label>
                            <select 
                                onChange={this.handleChangeRteQuote}
                                value={this.state.rteQuote}
                                className="ui dropdown ui compact menu "
                            >
                                {yesNo && yesNo.map(function (name, id) {
                                    return (
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="three fields">
                        <div className={"four field " + this.state.studentAadhaaarError}>
                            <label>Student's Aadhar UID Number </label>
                            <Input
                                value={this.state.aadharUidNumberStudent}
                                onChange={(event) => this.handleChange('aadharUidNumberStudent', event.target.value)}
                            />
                        </div>
                        <div className={"four field " + this.state.fatherAadhaarError}>
                            <label>Father's Aadhar UID Number</label>
                            <Input
                                value={this.state.aadharUidNumberFather}
                                onChange={(event) => this.handleChange('aadharUidNumberFather', event.target.value)}
                                maxLength="12"
                            />
                        </div>

                        <div className={"four field " + this.state.motherAadhaarError}>
                            <label>Mother's Aadhar UID Number</label>
                            <Input
                                value={this.state.aadharUidNumberMother}
                                onChange={(event) => this.handleChange('aadharUidNumberMother', event.target.value)}
                                maxLength="12"
                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="four field">
                            <label>Parent Name</label>
                            <Input
                                value={this.state.parentName}
                                onChange={(event) => this.handleChange('parentName', event.target.value)}
                                maxLength="12"
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Social Category
                        </label>
                            <Input
                                value={this.state.socialCategory}
                                onChange={(event) => this.handleChange('socialCategory', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Sub Category
                        </label>
                            <Input
                                value={this.state.subCategory}
                                onChange={(event) => this.handleChange('subCategory', event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="three fields">
                        <div className="four field">
                            <label>Student's Cast Certificate No</label>
                            <Input
                                value={this.state.studentCastCertNumber}
                                onChange={(event) => this.handleChange('studentCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Student's Cast
                        </label>
                            <Input
                                value={this.state.studentCastName}
                                onChange={(event) => this.handleChange('studentCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Student's Sub Cast
                        </label>
                            <Input
                                value={this.state.studentSubcastName}
                                onChange={(event) => this.handleChange('studentSubcastName', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="four field">
                            <label>
                                Father's Cast Certificate No
                        </label>
                            <Input
                                value={this.state.fatherCastCertNumber}
                                onChange={(event) => this.handleChange('fatherCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Father's Cast
                        </label>
                            <Input
                                value={this.state.fatherCastName}
                                onChange={(event) => this.handleChange('fatherCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Father's Sub Cast
                        </label>
                            <Input
                                value={this.state.fatherSubcastName}
                                onChange={(event) => this.handleChange('fatherSubcastName', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="four field">
                            <label>
                                Mother's Cast Certificate No
                        </label>
                            <Input
                                value={this.state.motherCastCertNumber}
                                onChange={(event) => this.handleChange('motherCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Mother's Cast
                        </label>
                            <Input
                                value={this.state.motherCastName}
                                onChange={(event) => this.handleChange('motherCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Mother's Sub Cast
                        </label>
                            <Input
                                value={this.state.motherSubcastName}
                                onChange={(event) => this.handleChange('motherSubcastName', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="four field">
                            <label>
                                BPL
                        </label>
                            <Input
                                value={this.state.bpl}
                                onChange={(event) => this.handleChange('bpl', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Bhagyalakshmi Bond Number
                        </label>
                            <Input
                                value={this.state.bhagyalakshmiBondNumber}
                                onChange={(event) => this.handleChange('bhagyalakshmiBondNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Student Special Need
                        </label>
                            <Input
                                value={this.state.studentSpecialNeed}
                                onChange={(event) => this.handleChange('studentSpecialNeed', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="four field">
                            <label>
                                Special Category
                        </label>
                            <Input
                                value={this.state.specialCategory}
                                onChange={(event) => this.handleChange('specialCategory', event.target.value)}
                            />
                        </div>
                        <div className="two field">
                            <label>Bus Pass Required</label>
                            <select 
                                onChange={this.handleChangeBusPass}
                                value={this.state.busPass} className="ui dropdown ui compact menu "
                            >
                                {yesNo && yesNo.map(function (name, id) {
                                    return (
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className={"four field " + this.state.studentMobileError}>
                            <label>
                                Student Mobile Number
                        </label>
                            <Input type="number"
                                value={this.state.studentPhoneNumber}
                                onChange={(event) => this.handleChange('studentPhoneNumber', event.target.value)}
                                maxLength = {10}
                            />
                        </div>
                        <div className={"four field " + this.state.fatherMobileError}>
                            <label>
                                Father's Mobile Number
                        </label>
                            <Input type="number"
                                value={this.state.fatherPhoneNumber}
                                onChange={(event) => this.handleChange('fatherPhoneNumber', event.target.value)}
                            />
                        </div>
                        <div className={"four field " + this.state.motherMobileError}>
                            <label>
                                Mother's Mobile Number
                        </label>
                            <Input type="number"
                                value={this.state.motherPhoneNumber}
                                onChange={(event) => this.handleChange('motherPhoneNumber', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">

                        <div className="four field">
                            <label>
                                Student's Email
                        </label>
                            <Input
                                value={this.state.studentEmail}
                                onChange={(event) => this.handleChange('studentEmail', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Father's Email
                        </label>
                            <Input
                                value={this.state.fatherEmail}
                                onChange={(event) => this.handleChange('fatherEmail', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Mother's Email
                        </label>
                            <Input
                                value={this.state.motherEmail}
                                onChange={(event) => this.handleChange('motherEmail', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field previous-button-css">
                            <Button basic color='teal' type="button" onClick={this.handlePrevious}> 
                                <Icon name="angle left" /> 
                                Previous
                            </Button>
                        </div>
                        <div className="field next-button-css">
                            <Button basic color='teal' type="button" onClick={this.handleNext}>
                                Next
                                <Icon name="angle right" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudentMore