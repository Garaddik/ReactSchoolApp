import React, {Component} from 'react'
import { Button, Input, Label,Icon,TextArea} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditNonTeachingStaffDetails extends Component{
    constructor(props){
        super(props);
        this.state ={
            nonTeachingStaffId : this.props.nonTeachingStaff.nonTeachingStaffId,
            firstName: this.props.nonTeachingStaff.firstName,
            lastName: this.props.nonTeachingStaff.lastName,
            phoneNumber: this.props.nonTeachingStaff.phoneNumber,
            moreInformation: this.props.nonTeachingStaff.moreInformation
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateNonTeachingStaff = this.updateNonTeachingStaff.bind(this)
    }

    handleChange = (event) =>{
            this.setState({
                [event.target.name] : event.target.value
            })
    }

    updateNonTeachingStaff = () => {
        if(this.state.firstName !== '') {
            const nonTeachingStaff = {
                nonTeachingStaffId: this.state.nonTeachingStaffId,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                phoneNumber : this.state.phoneNumber,
                moreInformation:this.state.moreInformation
            }
            const {dispatch, actions, school, loadUpdatedNonTeachingStaffDetails} = this.props
            dispatch(actions.updateNonTeachingStaff(school.schoolId, nonTeachingStaff))
            loadUpdatedNonTeachingStaffDetails(nonTeachingStaff)
        }

    }

    render(){
        const {nonTeachingStaff,loadNonTeachingStaffDetails} =  this.props
        return(
            <div>
                <div className='ui dividing header' style={{display:'flex', flexDirection:'row'}}>
                    <Button icon className="back-button" type="button"
                        onClick={() => loadNonTeachingStaffDetails(this.state)}>
                            <Icon name='arrow left'/>
                    </Button>
                    <h3> Update Supervisor Details</h3>
                </div>
                  <form className='ui form' name='form-data'>
                    <div className='field'>
                    <div className='four fields'>
                        <Label basic> Name </Label>
                        <div className='five wide field'>
                            <Input control='input' name='firstName' placeholder="First Name"
                               defaultValue={nonTeachingStaff.firstName} onChange={this.handleChange}></Input>
                        </div>
                        <div className="five wide field">
                            <Input control='input' name='lastName' placeholder="Last Name"
                                defaultValue={nonTeachingStaff.lastName} onChange={this.handleChange}></Input>
                        </div>
                    </div>                    
                    <div className='four fields'>
                    <Label basic> Mobile Number </Label>
                        <div className="five wide field">
                            <Input control='input' name='phoneNumber' placeholder="Mobile Number"
                                defaultValue={nonTeachingStaff.phoneNumber} onChange={this.handleChange}></Input>
                        </div>                        
                    </div>
                    <div className="field">
                        <label>More information</label>
                        <TextArea
                            value={this.state.moreInformation} name='moreInformation' onChange={this.handleChange} />
                    </div>
                    <div className="five wide field">
                            <Button className="address-fields" type='button' basic color='teal' onClick={this.updateNonTeachingStaff}>Update</Button>
                    </div>
                    </div> 
                </form>
            </div>

        )
    }
}

EditNonTeachingStaffDetails.propTypes = {
    nonTeachingStaff: PropTypes.object
}
export default EditNonTeachingStaffDetails;