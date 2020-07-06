import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class EditAddress extends Component {

    constructor(props) {
        super(props)
        let address = this.props.schoolTemplate.address
        this.state = {
            line1: address.line1 || '',
            line2: address.line2 || '',
            country: address.country || '',
            state: address.state || '',
            dist: address.dist || '',
            city: address.city || '',
            postalCode: address.postalCode || ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.updateAddress = this.updateAddress.bind(this)
    }

    updateAddress() {
        const { actions, dispatch, school, schoolTemplate } = this.props
        dispatch(actions.updateAddress(school.schoolId, schoolTemplate.templateId,
            schoolTemplate.address.addressId, this.state))
        this.props.parentMethod(0)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        const {
            line1,
            line2,
            country,
            state,
            dist,
            city,
            postalCode } = this.state

        return (

            <Form>
                <Form.Group >
                    <Form.Field required
                        width={8}
                        id='form-input-control-first-name'
                        control={Input}
                        label='Line1'
                        name="line1"
                        value={line1}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>

                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='Country'
                        name="country"
                        value={country}
                        onChange={this.handleChange}
                    />
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='State'
                        name="state"
                        value={state}
                        onChange={this.handleChange}
                    />
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='District'
                        name="dist"
                        value={dist}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field 
                        id='form-input-control-first-name'
                        control={Input}
                        label='City'
                        name="city"
                        value={city}
                        onChange={this.handleChange}
                    />


                    <Form.Field 
                        id='form-input-control-first-name'
                        control={Input}
                        label='Postal Code'
                        name="postalCode"
                        value={postalCode}
                        onChange={this.handleChange}
                    />

                </Form.Group>
                <Form.Group widths='equal' className="css-center">
                    <Form.Button basic color='teal' type='button' onClick={this.updateAddress}>Update</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default EditAddress