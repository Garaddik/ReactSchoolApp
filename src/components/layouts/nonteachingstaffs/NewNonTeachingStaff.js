import React, { Component } from 'react'
import { Button, Input, Confirm} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class NewNonTeachingStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            phone : false,
            name : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNonTeachingStaff = this.addNonTeachingStaff.bind(this)

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }   

    handlePhoneButton = () => {
        this.setState({
            phone: false
        })
    }

    handleNameButton = () => {
        this.setState({
            name: false
        })
    }

    addNonTeachingStaff = () => {
        if (this.state.firstName !== '') {
            if(this.state.phoneNumber.length === 10 || this.state.phoneNumber === ''){
            const nonTeachingStaff = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                type:1
            }
            const { dispatch, actions, school } = this.props
            dispatch(actions.addNonTeachingStaff(school.schoolId, nonTeachingStaff))
            this.setState({
                firstName : '',
                lastName: '',
                phoneNumber:'',
            })
        }
        else {
                this.setState({
                    phone: true
                })
            }
        }
        else {
            this.setState({
                name : true
            })
        }
    }

    render() {
        return (
            <div className='field'>
                <div className='five fields'>
                    <div className='five wide field'>
                        <Input value={this.state.firstName} name='firstName' onChange={this.handleChange} control='input' placeholder='First Name' />
                    </div>
                    <div className='five wide field'>
                        <Input value={this.state.lastName}  name='lastName' onChange={this.handleChange} control='input' placeholder='Last Name' />
                    </div>
                    <div className='five wide field'>
                        <Input value={this.state.phoneNumber} type="number" name='phoneNumber' onChange={this.handleChange} control='input' placeholder='Mobile Number' />
                    </div>
                    <div className='two wide field'>
                        <Button basic color='teal' type="button" onClick={this.addNonTeachingStaff}>Add</Button>
                    </div>
                    <div className='two wide field'>
                    </div>
                    <Confirm
                        open={this.state.phone}
                        header='Invalid mobile number, mobile number must be exactly 10 digits'
                        onCancel={this.handlePhoneButton}
                        onConfirm={this.handlePhoneButton}
                        content = "Please click OK to enter the correct number"
                    />

                    <Confirm
                        open={this.state.name}
                        header='Please enter a name to save the NonTeachingStaff'
                        onCancel={this.handleNameButton}
                        onConfirm={this.handleNameButton}
                        content = "Please click OK to enter the name"
                    />
                </div>
            </div>
        )
    }
}

NewNonTeachingStaff.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
}


export default NewNonTeachingStaff