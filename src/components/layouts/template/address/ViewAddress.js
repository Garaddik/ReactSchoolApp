import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class ViewAddress extends Component {

    constructor(props) {
        super(props)
        this.editAddress = this.editAddress.bind(this)
    }

    editAddress() {
        this.props.parentMethod(1)
    }

    render() {
        let address = this.props.schoolTemplate.address
        let line1= '',
        line2= '',
        city= '',
        postalCode='',
        state='',
        country = '',
        dist = ''
        
        if (address !== undefined) {
            line1= address.line1 || ''
            line2= address.line2 || ''
            country= address.country || ''
            state= address.state || ''
            dist= address.dist || ''
            city= address.city || ''
            postalCode= address.postalCode || ''
        }

        return (
            <Form className="views">
                <Form.Group >
                    <Form.Field required
                        width={8}
                        id='form-input-control-first-name'
                        control={Input}
                        label='Line1'
                        name="line1"
                        value={line1}
                        readOnly
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Field
                        width={8}
                        id='form-input-control-first-name'
                        control={Input}
                        label='Line2'
                        name="line2"
                        value={line2}
                        readOnly
                    />
                </Form.Group>
                <Form.Group widths='equal'>

                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='Country'
                        name="country"
                        value={country}
                        readOnly
                    />
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='State'
                        name="state"
                        value={state}
                        readOnly
                    />
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='District'
                        name="dist"
                        value={dist}
                        readOnly
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='City'
                        name="city"
                        value={city}
                        readOnly
                    />


                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Postal Code'
                        name="postalCode"
                        value={postalCode}
                        readOnly
                    />

                </Form.Group>
                <Form.Group widths='equal' className="css-center">
                    <Form.Button basic color='teal' type='button' onClick={this.editAddress}>Edit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default ViewAddress