import React, { Component } from 'react'
import { Input, Button, Message } from 'semantic-ui-react'
import { yesNo } from '../../../../commons/Constants'
class StudentMore extends Component {
    constructor(props) {
        super(props)
        if (this.props.student.studentMore) {

            this.state = {
                studentId : this.props.student.studentId,
                studentFirstname : this.props.student.firstName,
                mediumOfInstruction: this.props.student.studentMore.mediumOfInstruction ? this.props.student.studentMore.mediumOfInstruction : '',
                motherToungue: this.props.student.studentMore.motherToungue ? this.props.student.studentMore.motherToungue : '',
                language1: this.props.student.studentMore.language1 ? this.props.student.studentMore.language1 : '',
                language2: this.props.student.studentMore.language2 ? this.props.student.studentMore.language2 : '',
                language3: this.props.student.studentMore.language3 ? this.props.student.studentMore.language3 : '',
                fatherFirstName: this.props.student.studentMore.fatherFirstName ? this.props.student.studentMore.fatherFirstName : '',
                fatherLastName: this.props.student.studentMore.fatherLastName ? this.props.student.studentMore.fatherLastName : '',
                fatherMiddleName: this.props.student.studentMore.fatherMiddleName ? this.props.student.studentMore.fatherMiddleName : '' ,
                motherFirstName: this.props.student.studentMore.motherFirstName ? this.props.student.studentMore.motherFirstName : '',
                motherLastName: this.props.student.studentMore.motherLastName ? this.props.student.studentMore.motherLastName : '',
                motherMiddleName: this.props.student.studentMore.motherMiddleName ? this.props.student.studentMore.motherMiddleName : '',
                rteQuota: this.props.student.studentMore.rteQuota ? this.props.student.studentMore.rteQuota : '',
                religion: this.props.student.studentMore.religion ? this.props.student.studentMore.religion : '',
                aadharUidNumberStudent: this.props.student.studentMore.aadharUidNumberStudent ? this.props.student.studentMore.aadharUidNumberStudent : '',
                aadharUidNumberFather: this.props.student.studentMore.aadharUidNumberFather ? this.props.student.studentMore.aadharUidNumberFather : '',
                aadharUidNumberMother: this.props.student.studentMore.aadharUidNumberMother ? this.props.student.studentMore.aadharUidNumberMother : '',
                parentName: this.props.student.studentMore.parentName ? this.props.student.studentMore.parentName : '',
                socialCategory: this.props.student.studentMore.socialCategory ? this.props.student.studentMore.socialCategory : '',
                subCategory: this.props.student.studentMore.subCategory ? this.props.student.studentMore.subCategory : '',
                studentCastCertNumber: this.props.student.studentMore.studentCastCertNumber ? this.props.student.studentMore.studentCastCertNumber : '',
                studentCastName: this.props.student.studentMore.studentCastName ? this.props.student.studentMore.studentCastName : '',
                studentSubcastName: this.props.student.studentMore.studentSubcastName ? this.props.student.studentMore.studentSubcastName : '',
                fatherCastCertNumber: this.props.student.studentMore.fatherCastCertNumber ? this.props.student.studentMore.fatherCastCertNumber : '',
                fatherCastName: this.props.student.studentMore.fatherCastName ? this.props.student.studentMore.fatherCastName : '',
                fatherSubcastName: this.props.student.studentMore.fatherSubcastName ? this.props.student.studentMore.fatherSubcastName : '',
                motherCastCertNumber: this.props.student.studentMore.motherCastCertNumber ? this.props.student.studentMore.motherCastCertNumber : '',
                motherCastName: this.props.student.studentMore.motherCastName ? this.props.student.studentMore.motherCastName : '',
                motherSubcastName: this.props.student.studentMore.motherSubcastName ? this.props.student.studentMore.motherSubcastName : '',
                bpl: this.props.student.studentMore.bpl ? this.props.student.studentMore.bpl : '',
                bhagyalakshmiBondNumber: this.props.student.studentMore.bhagyalakshmiBondNumber ? this.props.student.studentMore.bhagyalakshmiBondNumber : '',
                studentSpecialNeed: this.props.student.studentMore.studentSpecialNeed ? this.props.student.studentMore.studentSpecialNeed : '',
                specialCategory: this.props.student.studentMore.specialCategory ? this.props.student.studentMore.specialCategory : '',
                busPass: this.props.student.studentMore.busPass ? this.props.student.studentMore.busPass : '',
                studentPhoneNumber: this.props.student.studentMore.studentPhoneNumber ? this.props.student.studentMore.studentPhoneNumber : '',
                fatherPhoneNumber: this.props.student.studentMore.fatherPhoneNumber ? this.props.student.studentMore.fatherPhoneNumber : '',
                motherPhoneNumber: this.props.student.studentMore.motherPhoneNumber ? this.props.student.studentMore.motherPhoneNumber : '',
                studentEmail: this.props.student.studentMore.studentEmail ? this.props.student.studentMore.studentEmail : '',
                fatherEmail: this.props.student.studentMore.fatherEmail ? this.props.student.studentMore.fatherEmail : '',
                motherEmail: this.props.student.studentMore.motherEmail ? this.props.student.studentMore.motherEmail : '',
                fatherAadharError: this.props.student.studentMore.fatherAadharError ? this.props.student.studentMore.fatherAadharError : '',
                motherAadhaarError : this.props.student.studentMore.motherAadhaarError ? this.props.student.studentMore.motherAadhaarError : '',
                studentAadhaaarError : this.props.student.studentMore.studentAadhaaarError ? this.props.student.studentMore.studentAadhaaarError : '',
                fatherMobileError: this.props.student.studentMore.fatherMobileError ? this.props.student.studentMore.fatherMobileError : '',
                motherMobileError : this.props.student.studentMore.motherMobileError ? this.props.student.studentMore.motherMobileError : '',
                studentMobileError : this.props.student.studentMore.studentMobileError ? this.props.student.studentMore.studentMobileError : '',
                smoreInfoId : this.props.student.studentMore.smoreInfoId ? this.props.student.studentMore.smoreInfoId : '',
                buttonState : true,
                visible : false
            }
        } 
        else {
            this.state = {
                studentId : this.props.student.studentId,
                studentFirstname : this.props.student.firstName,
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
                rteQuota: 'No',
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
                studentMobileError : '',
                buttonState : true,
                visible : false
            }
        }
        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeRteQuote = this.handleChangeRteQuote.bind(this)
        this.handleChangeBusPass = this.handleChangeBusPass.bind(this) 
    }

    handleChange(field, value) {
        this.setState({
            [field]: value,
            buttonState : false
        });
        if(value === ''){
            this.setState({
                buttonState : true
            })
        }
    }

    update() {
        const { actions, school } = this.props
        if(this.state.aadharUidNumberStudent.length !== 12 && this.state.aadharUidNumberStudent.length !== 0){
            this.setState({
                studentAadhaaarError : 'error'
            })
        }
        else if(this.state.aadharUidNumberFather.length !== 12 && this.state.aadharUidNumberFather.length !== 0){
            this.setState({
                fatherAadhaarError : 'error'
            })
        }
        else if(this.state.aadharUidNumberMother.length !== 12 && this.state.aadharUidNumberMother.length !== 0){
            this.setState({
                motherAadhaarError : 'error'
            })
        }
        else if(this.state.studentPhoneNumber.length !== 10 && this.state.studentPhoneNumber.length !== 0 ){
            this.setState({
                studentMobileError : 'error'
            })
        }
        else if(this.state.fatherPhoneNumber.length !== 10 && this.state.fatherPhoneNumber.length !== 0 ){
            this.setState({
                fatherMobileError : 'error'
            })
        }
        else if(this.state.motherPhoneNumber.length !== 10 && this.state.motherPhoneNumber.length !== 0 ){
            this.setState({
                motherMobileError : 'error'
            })
        }
        else{
            let onSuccess = actions.updateStudentMoreInfo(school.schoolId, this.state.studentId, this.state)
            onSuccess.then(function(onSuccess) {
                if(onSuccess){
                    this.setState({
                        visible : true,
                        buttonState : true,
                        studentAadhaaarError : '',
                        fatherAadhaarError : '',
                        motherAadhaarError : '',
                        studentMobileError : '',
                        fatherMobileError : '',
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

    handleChangeBusPass(event) {
        this.setState({
            busPass: event.target.value
        })
    }

    handleChangeRteQuote(event) {
        this.setState({
            rteQuota: event.target.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.visible &&
                    <Message positive>
                        <Message.Header>{this.state.studentFirstname + '\'s'}  More Info Updated</Message.Header>
                    </Message>
                }
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
                    <div className="three fields">
                        <div className="four field">
                            <label>Religion</label>
                            <Input
                                value={this.state.religion}
                                onChange={(event) => this.handleChange('religion', event.target.value)} />
                        </div>
                        <div className="two field">
                            <label>Child admitted under RTE quota</label>
                            <select 
                                onChange={this.handleChangeRteQuote}
                                value={this.state.rteQuota}
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
                    <div className="two fields">
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
                            <label>Student's Caste Certificate No</label>
                            <Input
                                value={this.state.studentCastCertNumber}
                                onChange={(event) => this.handleChange('studentCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Student's Caste
                        </label>
                            <Input
                                value={this.state.studentCastName}
                                onChange={(event) => this.handleChange('studentCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Student's Sub Caste
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
                                Father's Caste Certificate No
                        </label>
                            <Input
                                value={this.state.fatherCastCertNumber}
                                onChange={(event) => this.handleChange('fatherCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Father's Caste
                        </label>
                            <Input
                                value={this.state.fatherCastName}
                                onChange={(event) => this.handleChange('fatherCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Father's Sub Caste
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
                                Mother's Caste Certificate No
                        </label>
                            <Input
                                value={this.state.motherCastCertNumber}
                                onChange={(event) => this.handleChange('motherCastCertNumber', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Mother's Caste
                        </label>
                            <Input
                                value={this.state.motherCastName}
                                onChange={(event) => this.handleChange('motherCastName', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>
                                Mother's Sub Caste
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
                                Student With Special Need
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
                </form>
                <div className="five wide field update-button-css">
                    <Button type='button' basic color='teal' onClick={this.update} disabled={this.state.buttonState}>
                        Update
                    </Button>
                </div>
            </div>
        )
    }
}

export default StudentMore