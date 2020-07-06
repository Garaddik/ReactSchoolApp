import React, {Component} from 'react'
import { Button, Input, Label, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import AddressDetails from '../../commons/address/AddressDetails';

class StaffDetails extends Component{
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
    }

    render(){
        const {staff, editStaffDetails, loadStaffList} =  this.props
        return(
            <div>
                <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                    onClick={() => loadStaffList()}>
                        <Icon name='arrow left'/>
                    </Button>
                    <h3> Staff Details</h3>
                </div>
                  <form className='ui form' name='form-data'>
                    <div className='field'>
                    <div className='four fields'>
                        <Label basic> Name </Label>
                        <div className='five wide field'>
                            <Input control='input' name='firstName' placeholder="First Name"
                            >{staff.firstName + ' ' + (staff.lastName ? staff.lastName : ' ')}</Input>
                        </div>
                    </div>
                    <div className='four fields'>
                    <Label basic> Mobile Number </Label>
                        <div className="five wide field">
                        {
                            staff.phoneNumber &&
                            <Input control='input' name='dob' placeholder="Mobile Number">
                                {staff.phoneNumber}
                            </Input>
                        }
                        </div> 
                    </div>
                    {staff.email && <div className='four fields'>
                             <Label basic> E mail </Label>
                            <div className="five wide field">
                                 <Input control='input' name='email' placeholder="E mail">{this.state.email}</Input>
                            </div> 
                        </div>}
                    {staff.dob && <div className='four fields'>
                            <Label basic> Date of Birth </Label>
                            <div className="five wide field">
                                 <Input control='input' placeholder="dd/mm/yyyy">{staff.dob}</Input>
                             </div>
                         </div>}
                    <AddressDetails address={staff.address}/>
                        <div className="five wide field">
                            <Button basic color='teal' type="button" className="address-fields" onClick={() => editStaffDetails()}>
                                Edit Details</Button>
                        </div>
                    </div> 
                </form>
            </div>

        )
    }
}

StaffDetails.propTypes = {
    editTeacherDetails: PropTypes.func,
    staff: PropTypes.object
}
export default StaffDetails;