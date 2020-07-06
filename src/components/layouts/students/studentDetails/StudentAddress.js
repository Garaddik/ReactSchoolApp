import React, { Component } from 'react'
import { Input, Button, Message } from 'semantic-ui-react'
import './StudentAdmission.css'

class StudentAddress extends Component {

    constructor(props) {
        super(props)
        if (this.props.studentAddress) {
            this.state = {
                firstName : this.props.student.firstName,
                line1: this.props.studentAddress.line1 ? this.props.studentAddress.line1 : '',
                line2: this.props.studentAddress.line2 ? this.props.studentAddress.line2 : '',
                country: this.props.studentAddress.country ? this.props.studentAddress.country : '',
                state: this.props.studentAddress.state ? this.props.studentAddress.state : '',
                dist: this.props.studentAddress.dist ? this.props.studentAddress.dist : '',
                city: this.props.studentAddress.city ? this.props.studentAddress.city: '',
                postalCode: this.props.studentAddress.postalCode ? this.props.studentAddress.postalCode : '',
                addressId : this.props.studentAddress.addressId ?this.props.studentAddress.addressId : '',
                open: false,
                buttonState : true
            }
        }
        else {
            this.state = {
                line1: '',
                line2: '',
                country: '',
                state: '',
                dist: '',
                city: '',
                postalCode: '',
                visible: false,
                buttonState : true
            }
        }
        this.updateAddress = this.updateAddress.bind(this)
        this.addAddress = this.addAddress.bind(this)
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.studentAddress){
            this.setState({
                firstName : nextProps.student.firstName,
                line1: nextProps.studentAddress.line1 ? nextProps.studentAddress.line1 : '',
                line2: nextProps.studentAddress.line2 ? nextProps.studentAddress.line2 : '',
                country: nextProps.studentAddress.country ? nextProps.studentAddress.country :'',
                state: nextProps.studentAddress.state ? nextProps.studentAddress.state : '',
                dist: nextProps.studentAddress.dist ? nextProps.studentAddress.dist : '',
                city: nextProps.studentAddress.city ? nextProps.studentAddress.city : '',
                postalCode: nextProps.studentAddress.postalCode ? nextProps.studentAddress.postalCode : '',
                addressId : nextProps.studentAddress.addressId ? nextProps.studentAddress.addressId : '',
                open: false,
                buttonState : true
            })
        }
        else {
            this.setState({
                line1: '',
                line2: '',
                country: '',
                state: '',
                dist: '',
                city: '',
                postalCode: '',
                visible: false,
                buttonState : true
            })
        }
        
    }

    componentDidMount = () => {
        const {actions, dispatch, school, student} = this.props
        dispatch(actions.getStudentAddress(school.schoolId, student.studentId))
    }

    updateAddress = () => {
        const {school, student, actions} = this.props
        let onSuccess = actions.updateStudentAddress(school.schoolId, student.studentId, this.state)
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

    addAddress = () => {
        const {school, student, actions, dispatch} = this.props
        dispatch(actions.addStudentAddress(school.schoolId, student.studentId, this.state))
        this.setState({
            visible : true,
            buttonState : true
        })
        setTimeout(() => {
            this.setState({
                visible : false,
            })
          },3000)
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

    render() {
        return (
            <div>
                {
                    this.state.visible &&
                    <Message positive>
                        <Message.Header>{this.state.firstName + '\'s'}  Address Updated</Message.Header>
                    </Message>
                }
                <form className="ui form">
                    <h3 className='ui dividing header'> Address </h3>
                    <div className="two fields">
                        <div className="four field">
                            <label>Line 1</label>
                            <Input
                                value={this.state.line1}
                                onChange={(event) => this.handleChange('line1', event.target.value)}
                            />
                        </div>
                        <div className="four field">
                            <label>Line 2</label>
                            <Input
                                value={this.state.line2}
                                onChange={(event) => this.handleChange('line2', event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Country</label>
                            <Input
                                value={this.state.country}
                                onChange={(event) => this.handleChange('country', event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>State</label>
                            <Input
                                value={this.state.state}
                                onChange={(event) => this.handleChange('state', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>District</label>
                            <Input
                                value={this.state.dist}
                                onChange={(event) => this.handleChange('dist', event.target.value)} />
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>City</label>
                            <Input
                                value={this.state.city}
                                onChange={(event) => this.handleChange('city', event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Postalcode</label>
                            <Input
                                value={this.state.postalCode}
                                onChange={(event) => this.handleChange('postalCode', event.target.value)} />
                        </div>
                    </div>
                </form>
                {
                    this.props.studentAddress === null &&
                    <div className="five wide field update-button-css">
                    <Button type='button' basic color='teal' onClick={this.addAddress} disabled={this.state.buttonState}>
                        Add Address
                    </Button>
                </div>
                }
                {
                    this.props.studentAddress &&
                    <div className="five wide field update-button-css">
                    <Button type='button' basic color='teal' onClick={this.updateAddress} disabled={this.state.buttonState}>
                        Update Address
                    </Button>
                </div>
                }
            </div>
        )
    }
}

export default StudentAddress