import React, { Component } from 'react'
import { Form, Input, TextArea } from 'semantic-ui-react'

class ViewSchool extends Component {

    constructor(props) {
        super(props)
        this.editSchool = this.editSchool.bind(this)
    }

    editSchool() {
        this.props.parentMethod(1)
    }
    render() {

        const { school } = this.props

        return (

            <Form>
                <Form.Group widths='equal'>
                    <Form.Field required
                        id='form-input-control-name'
                        control={Input}
                        label='Name'
                        name="Name"
                        readOnly
                        value={school.name ? school.name : ''}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required
                        id='form-input-control-phone-number'
                        control={Input}
                        label='Phone Number'
                        name="phoneNumber"
                        readOnly
                        value={school.phoneNumber ? school.phoneNumber : ''}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-name'
                        control={Input}
                        label='School Code'
                        name="schoolCode"
                        readOnly
                        value={school.schoolCode ? school.schoolCode : ''}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-name'
                        control={Input}
                        label='Accreditation'
                        name="accreditation"
                        readOnly
                        value={school.accreditation ? school.accreditation : ''}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-name'
                        control={Input}
                        label='Government Order'
                        name="governmentOrder"
                        readOnly
                        value={school.governmentOrder ? school.governmentOrder : ''}
                    />
                </Form.Group>


                <Form.Field required
                    id='form-textarea-control-keywords'
                    control={TextArea}
                    label='Keywords'
                    name="text"
                    readOnly
                    value={school.keywords}
                />
                <div className="css-center">
                    <Form.Button basic color='teal' type='button' onClick={this.editSchool}>Edit</Form.Button>
                </div>
            </Form>
        )
    }
}


export default ViewSchool