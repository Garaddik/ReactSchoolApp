
import React, { Component } from 'react'
import { Form, Input, TextArea } from 'semantic-ui-react'

class EditSchool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.school.name || '',
            keywords: this.props.school.keywords || '',
            phoneNumber: this.props.school.phoneNumber || '',
            schoolCode: this.props.school.schoolCode || '',
            accreditation: this.props.school.accreditation || '',
            governmentOrder: this.props.school.governmentOrder || ''
        }
        this.updateSchool = this.updateSchool.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    updateSchool() {
        const { school, actions, dispatch } = this.props
        dispatch(actions.updateSchool(school.schoolId, this.state))
        this.props.parentMethod(0)
    }
    
    render() {
        const { name, keywords, phoneNumber, schoolCode, accreditation, governmentOrder} = this.state
        return (

            <Form>
                <Form.Group widths='equal'>
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='Name'
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required
                        id='form-input-control-phone-number'
                        control={Input}
                        label='Phone Number'
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-school-code'
                        control={Input}
                        label='School Code'
                        name="schoolCode"
                        value={schoolCode}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-school-code'
                        control={Input}
                        label='Accreditation'
                        name="accreditation"
                        value={accreditation}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-school-code'
                        control={Input}
                        label='Government Order'
                        name="governmentOrder"
                        value={governmentOrder}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field required
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Keywords'
                    name="keywords"
                    value={keywords}
                    onChange={this.handleChange}
                />
                <div className="css-center">
                    <Form.Button basic color='teal' type='button' onClick={this.updateSchool}>Update</Form.Button>
                </div>
            </Form>
        )
    }
}


export default EditSchool