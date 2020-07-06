import React, {Component} from 'react'
import { Input, Label} from 'semantic-ui-react'
import './Address.css'

class EditAddressDetails extends Component{
    constructor(props){
        super(props);
        const isAddressExisting = this.props.address === undefined ? false : true
        if(isAddressExisting){
            this.state = {
                line1: this.props.address.line1,
                line2: this.props.address.line2,
                city:this.props.address.city,
                postalCode:this.props.address.postalCode,
                state:this.props.address.state,
            }
        }
        else{
            this.state = {
                line1: '',
                line2: '',
                city: '',
                postalCode:'',
                state:''
            }
        }
        this.handleAddressChange = this.handleAddressChange.bind(this)
    }

    handleAddressChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

        getAddress = () => {
            return this.state
        }

    render(){
        return(
                 <div>
                    <div className='four fields'>
                            <Label basic> Address </Label>
                            <div className="five wide field">
                                <Input control='input' name='line1' placeholder="Address Line 1"
                                    defaultValue={this.state.line1} onChange={this.handleAddressChange}></Input>
                            </div>  
                        </div>
                        <div className='four fields'>
                            <div className="five wide field ">
                                <Input control='input' name='line2' className="address-fields" placeholder="Address Line 2"
                                    defaultValue={this.state.line2} onChange={this.handleAddressChange}></Input>
                            </div>  
                        </div>
                        <div className='four fields'>
                            <div className="five wide field">
                                <Input control='input' name='city' className="address-fields" placeholder="City"
                                    defaultValue={this.state.city} onChange={this.handleAddressChange}></Input>
                            </div>  
                        </div>
                        <div className='four fields'>
                            <div className="five wide field">
                                <Input control='input' name='postalCode' className="address-fields" placeholder="Postal Code"
                                    defaultValue={this.state.postalCode} onChange={this.handleAddressChange}></Input>
                            </div>  
                        </div>
                        <div className='four fields'>
                            <div className="five wide field">
                                <Input control='input' name='state' className="address-fields" placeholder="State"
                                    defaultValue={this.state.state} onChange={this.handleAddressChange}></Input>
                            </div>    
                        </div> 
                </div> 
        )
    }
}



export default EditAddressDetails