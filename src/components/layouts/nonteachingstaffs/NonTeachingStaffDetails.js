import React, {Component} from 'react'
import { Button, Input, Label, Icon, TextArea} from 'semantic-ui-react'
import PropTypes from 'prop-types'


class NonTeachingStaffDetails extends Component{
    constructor(props){
        super(props);
        this.state ={
           nonTeachingStaffId : this.props.nonTeachingStaff.nonTeachingStaffId,
            firstName: this.props.nonTeachingStaff.firstName,
            lastName: this.props.nonTeachingStaff.lastName,
            phoneNumber: this.props.nonTeachingStaff.phoneNumber
        }
    }

    render(){
        const {nonTeachingStaff, editNonTeachingStaffDetails, loadNonTeachingStaffList} =  this.props
        return(
            <div>
                <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                    onClick={() => loadNonTeachingStaffList()}>
                        <Icon name='arrow left'/>
                    </Button>
                    <h3> Supervisor Details</h3>
                </div>
                  <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='four fields'>
                            <Label basic> Name </Label>
                            <div className='five wide field'>
                                <Input control='input' name='firstName' placeholder="First Name"
                                >{nonTeachingStaff.firstName + ' ' + (nonTeachingStaff.lastName ?nonTeachingStaff.lastName : ' ')}</Input>
                            </div>
                        </div>
                        <div className='four fields'>
                            <Label basic> Mobile Number </Label>
                            <div className="five wide field">
                            {
                            nonTeachingStaff.phoneNumber &&
                                <Input control='input' name='dob' placeholder="Mobile Number">
                                    {nonTeachingStaff.phoneNumber}
                                </Input>
                            }
                            </div>
                        </div>
                        <div className="field">
                        {
                            nonTeachingStaff.moreInformation &&
                            <div>
                                <label>More information</label>
                                <TextArea value={nonTeachingStaff.moreInformation}
                                name='moreInformation' disabled = {true}/>
                            </div>
                        }
                        </div>
                        <div className="five wide field">
                            <Button basic color='teal' type="button" className="address-fields" onClick={() => editNonTeachingStaffDetails()}>
                                Edit Details</Button>
                        </div>
                    </div> 
                </form>
            </div>

        )
    }
}

NonTeachingStaffDetails.propTypes = {
    editTeacherDetails: PropTypes.func,
    nonTeachingStaff: PropTypes.object
}
export default NonTeachingStaffDetails;