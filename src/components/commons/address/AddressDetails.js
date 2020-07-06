import React, {Component} from 'react'
import { Input, Label} from 'semantic-ui-react'
import './Address.css'

class AddressDetails extends Component{
    render(){
        const isAddressExisting = this.props.address === undefined ? false : true
        let line1= '',
        line2= '',
        city= '',
        postalCode='',
        state=''

        if(isAddressExisting){
            line1= this.props.address.line1
            line2= this.props.address.line2
            city=this.props.address.city
            postalCode=this.props.address.postalCode
            state=this.props.address.state
        }
        return(
                 <div>
                     <div className='four fields'>
                        <Label basic> Address </Label>
                    </div>
                    <div className='four fields'>
                        <div className="five wide field">
                           <Input control='input' name='line1' className="address-fields" placeholder="Address Line 1">{line1}</Input>
                        </div>
                    </div>
                    <div className='four fields'>
                        <div className="five wide field ">
                            <Input control='input' name='line2' className="address-fields" placeholder="Address Line 2" >{line2}</Input>
                        </div>  
                    </div>
                    <div className='four fields'>
                        <div className="five wide field">
                            <Input control='input' name='city' className="address-fields" placeholder="City">{city}</Input>
                        </div>  
                    </div>
                    <div className='four fields'>
                        <div className="five wide field">
                            <Input control='input' name='postalCode' className="address-fields" placeholder="Postal Code">{postalCode}</Input>
                        </div>  
                    </div>
                    <div className='four fields'>
                        <div className="five wide field">
                            <Input control='input' name='state' className="address-fields" placeholder="State">{state}</Input>
                        </div>    
                    </div> 
                    
                </div> 
        )
    }
}


export default AddressDetails