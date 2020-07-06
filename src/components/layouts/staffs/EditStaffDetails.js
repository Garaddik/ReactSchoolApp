import React, {Component} from 'react'
import { Button, Input, Label} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './Staffs.css'
import EditAddressDetails from '../../commons/address/EditAddressDetails'

class EditStaffDetails extends Component{
    constructor(props){
        super(props);
        this.state ={
            staffId : this.props.staff.staffId,
            firstName: this.props.staff.firstName,
            lastName: this.props.staff.lastName,
            phoneNumber: this.props.staff.phoneNumber,
            dob:this.props.staff.dob,
            email:this.props.staff.email
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateStaff = this.updateStaff.bind(this)
        this.getAddress = this.getAddress.bind(this)
        this.addressChild = React.createRef()
    }

    handleChange = (event) =>{
            this.setState({
                [event.target.name] : event.target.value
            })
    }

    updateStaff = () => {
        if(this.state.firstName !== '') {
            const staff = {
                staffId: this.state.staffId,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                phoneNumber : this.state.phoneNumber,
                dob: this.state.dob,
                email: this.state.email,
                address: this.addressChild.current.getAddress()
            }
            const {dispatch, actions, school, loadUpdatedStaffDetails} = this.props
            dispatch(actions.updateStaff(school.schoolId, staff))
            loadUpdatedStaffDetails(staff)
        }

    }

    getAddress = (address) => {
        this.setState({
            address:address
        })
    }

    render(){
        const {staff} =  this.props
        return(
            <div>
                <h3 className='ui dividing header'> Update Staff Details</h3>
                  <form className='ui form' name='form-data'>
                    <div className='field'>
                    <div className='four fields'>
                        <Label basic> Name </Label>
                        <div className='five wide field'>
                            <Input control='input' name='firstName' placeholder="First Name"
                               defaultValue={staff.firstName} onChange={this.handleChange}></Input>
                        </div>
                        <div className="five wide field">
                            <Input control='input' name='lastName' placeholder="Last Name"
                                defaultValue={staff.lastName} onChange={this.handleChange}></Input>
                        </div>
                    </div>
                    <div className='four fields'>
                    <Label basic> Date of Birth </Label>
                        <div className="five wide field">
                            <Input control='input' name='dob' placeholder="Date of Birth"
                                defaultValue={staff.dob} onChange={this.handleChange}></Input>
                    </div>
                    </div>
                    <div className='four fields'>
                    <Label basic> Contact </Label>
                        <div className="five wide field">
                            <Input control='input' name='phoneNumber' placeholder="Mobile Number"
                                defaultValue={staff.phoneNumber} onChange={this.handleChange}></Input>
                        </div> 
                        <div className="five wide field">
                            <Input control='input' name='email' placeholder="E mail"
                                defaultValue={staff.email} onChange={this.handleChange}></Input>
                        </div> 
                    </div>
                    <EditAddressDetails address={staff.address} ref={this.addressChild}/>
                            <div className="five wide field">
                                    <Button className="address-fields" type='button' basic color='teal' onClick={this.updateStaff}>Update</Button>
                            </div>
                    </div> 
                </form>
            </div>

        )
    }
}

EditStaffDetails.propTypes = {
    staff: PropTypes.object
}
export default EditStaffDetails;