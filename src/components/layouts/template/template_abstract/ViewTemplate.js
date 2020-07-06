import React, { Component } from 'react'
import { Form, TextArea, Button, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import "./ViewTemplate.css"

class ViewTemplate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.schoolTemplate.title || '',
            description: this.props.schoolTemplate.description || '',
            logoPath: this.props.schoolTemplate.logoPath || '',
            redirect: false,
            galleryUrl: ""
        }
        this.editTemplate = this.editTemplate.bind(this)
        this.loadGallery = this.loadGallery.bind(this)
    }

    loadGallery = () => {
        this.setState({
            galleryUrl: 'template/' + this.props.schoolTemplate.templateId,
            redirect: true
        })
    }

    editTemplate() {
        this.props.parentMethod(1, 0, this.state)
    }

    render() {
        const { title, description, redirect, galleryUrl } = this.state
        return (
            <div>
                {redirect && <Redirect to={galleryUrl} />}
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field required
                            id='form-input-control-first-name'
                            control={TextArea}
                            label='About School'
                            name="title"
                            readOnly
                            value={title}
                        />
                    </Form.Group>
                    <Form.Field required
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Facilities at school'
                        name="description"
                        readOnly
                        value={description}
                    />
                    {
                        this.state.logoPath !== '' &&
                        <div className="bottom-gap">
                            <Label title="Logo" />
                            <Image src={this.state.logoPath} size="small" />
                        </div>
                    }
                    <Form.Group widths='equal'>
                        <div className="css-center">
                            <Form.Button basic color='teal' type='button' onClick={this.editTemplate}>Edit</Form.Button>
                        </div>

                        <div className='two wide field'>
                            {<Button basic color='teal' type="button" onClick={() => this.loadGallery()} >Gallery</Button>}
                        </div>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
export default ViewTemplate