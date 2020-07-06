import React, { Component } from 'react'
import { Button, Input, Icon, Confirm } from 'semantic-ui-react'
import './StudentAdmission.css'

class StudentAddress extends Component {

    constructor(props) {
        super(props)
        if (this.props.studentAddress !== undefined) {
            this.state = this.props.studentAddress
        } else {
            this.state = {
                line1: '',
                line2: '',
                country: '',
                state: '',
                dist: '',
                city: '',
                postalCode: '',
                selectedStandardId: '',
                errorClass: '',
                open: false
            }
        }

        if (this.props.selectedStandardId !== '') {
            this.state.selectedStandardId = this.props.selectedStandardId
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.submitApplication = this.submitApplication.bind(this)
    }

    submitForm() {
        if (this.state.selectedStandardId === '') {
            this.setState({
                errorClass: 'error',
            })
        } else {
            this.setState({
                errorClass: '',
                open: true
            })
        }
    }

    handleCancel = () => {
        this.setState({
            open: false
        })
    }

    selectStandard = (event) => {
        if (event.target.value !== '') {
            this.setState({
                selectedStandardId: event.target.value
            })
        }
    }

    handlePrevious() {
        this.props.fourthToThird(this.state)
    }

    handleChange(field, value) {
        this.setState({ [field]: value });
    }

    submitApplication() {

        this.setState({
            errorClass: '',
            open: false
        })
        this.props.submitStudentForm(this.state.selectedStandardId, this.state)

        
    }

    render() {
        const { standards } = this.props
        return (
            <div>
                <form className="ui form">
                    <div className="two fields">
                        <div className="five wide field">
                            <label style={{ lineHeight: '2.5em' }}>Select Standard</label>
                        </div>
                        <div className={"five wide field " + this.state.errorClass}>
                            <select onChange={this.selectStandard} value={this.state.selectedStandardId} className="ui dropdown ui compact menu ">
                                <option value=''>Standards</option>
                                {standards && standards.map(function (standard, id) {
                                    return (
                                        <option key={id} value={standard.standardId}>{standard.name}</option>
                                    )
                                })}

                            </select>
                        </div>
                    </div>

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
                    <div className="two fields">
                        <div className="field previous-button-css">
                            <Button basic color='teal' type="button" onClick={this.handlePrevious}> <Icon name="angle left" />  Previous </Button>
                        </div>
                        <div className="field next-button-css">
                            <Button basic color='teal' type="button" onClick={this.submitForm}> Submit Form</Button>
                        </div>
                    </div>
                </form>

                <div>
                    <Confirm
                        open={this.state.open}
                        header='Are you sure want to submit student complete information?'
                        onCancel={this.handleCancel}
                        onConfirm={this.submitApplication}
                    />
                </div>

            </div>
        )
    }
}

export default StudentAddress