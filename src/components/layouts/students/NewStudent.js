import React, {Component} from 'react'
import { Button, Input, Confirm} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class NewStudent extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstName : '',
            lastName: '',
            phoneNumber:'',
            standard : false,
            phone : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.addStudent = this.addStudent.bind(this)

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
   }

   handleStandardButton = () => {
        this.setState({
            standard: false
        })
    }

    handlePhoneButton = () => {
        this.setState({
            phone: false
        })
    }
   
   addStudent = () => {
        if(this.state.firstName !== '') {
            if(this.state.phoneNumber.length === 10 || this.state.phoneNumber === ''){
                const student = {
                    firstName : this.state.firstName,
                    lastName : this.state.lastName,
                    phoneNumber : this.state.phoneNumber
                }
                const {dispatch, actions, school, standardId, activeYear} = this.props
                if(standardId !== ''){
                    dispatch(actions.addStudent(school.schoolId, standardId, student, activeYear.eduYearId))
                    this.setState({
                        firstName : '',
                        lastName: '',
                        phoneNumber:'',
                    })
                }
                else{
                    this.setState({
                        standard : true
                    })
                }
            }
            else{
                this.setState({
                    phone : true
                })
            }
        }
    }

    render(){
        return(
            <div className='field'>
                <div className='four fields'>
                    <div className='five wide field'>
                    <Input value={this.state.firstName} name='firstName' onChange={this.handleChange} control='input' placeholder='First Name'/>
                    </div>
                    <div className='five wide field'>
                    <Input value={this.state.lastName} name ='lastName' onChange={this.handleChange} control='input' placeholder='Last Name'/>
                    </div>
                    <div className='five wide field'>
                    <Input value={this.state.phoneNumber} name='phoneNumber' type="number" onChange={this.handleChange} control='input' placeholder='Mobile Number'/>
                    </div>
                    <div className='two wide field'>
                    <Button basic color='teal' type="button" onClick={this.addStudent}>Add</Button>
                    </div>
                     <Confirm
                        open={this.state.standard}
                        header='Please select a standard before adding a student'
                        onCancel={this.handleStandardButton}
                        onConfirm={this.handleStandardButton}
                        content = "Please click OK to select standard"
                    />
                     <Confirm
                        open={this.state.phone}
                        header='Invalid mobile number, mobile number must be exactly 10 digits'
                        onCancel={this.handlePhoneButton}
                        onConfirm={this.handlePhoneButton}
                        content = "Please click OK to enter the correct number"
                    />
                </div>
            </div>
        )
    }
}

NewStudent.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standardId:PropTypes.string
}


export default NewStudent