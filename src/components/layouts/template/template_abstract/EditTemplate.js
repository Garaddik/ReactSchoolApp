import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

class EditTemplate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.schoolTemplate.title || '',
            description: this.props.schoolTemplate.description || '',
            logoPath: this.props.schoolTemplate.logoPath || '',
            logoError: '',
            titleError: '',
            descError: '',
            uploadStatus: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateTemplate = this.updateTemplate.bind(this)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }

    updateTemplate() {
        const { actions, school, dispatch, schoolTemplate } = this.props
        dispatch(actions.updateTemplate(school.schoolId, schoolTemplate.templateId, this.state))
        this.props.parentMethod(0, 2, this.state)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    fileSelectedHandler(event) {
        const { school, actions } = this.props
        if (event.target.files === undefined) {
            this.setState({
                logoError: 'error'
            })
        } else {
            this.setState({
                uploadStatus: 'loading'
            })    
            const fileForm = new FormData()
            fileForm.append('file', event.target.files[0])
            let response = actions.uploadTemplateLogo(school.schoolId, fileForm)
            response.then(function (response) {
                if (response) {
                    this.setState({
                        logoPath: response.logoPath,
                        uploadStatus:''
                    })
                }
            }.bind(this))
        }
    }

    render() {
        const { title, description, uploadStatus } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={TextArea}
                        label='About School'
                        name="title"
                        value={title}
                        className={'ui field ' + this.state.titleError}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Facilities at school'
                    name="description"
                    value={description}
                    className={'ui field ' + this.state.descError}
                    onChange={this.handleChange}
                />
                {
                    this.state.logoPath !== '' &&

                    <Image src={this.state.logoPath} size="small" />
                }
                <Form.Group widths='equal'>
                    <div className={'ui field ' + this.state.logoError + ' aligned left'}>
                        <input type="file" onChange={this.fileSelectedHandler} className="inputfile" id="embedpollfileinput" />
                        <label htmlFor="embedpollfileinput" className={"ui basic teal huge left floated  " + uploadStatus + " button"}>
                            <i className="ui upload icon"></i>
                            Upload Logo
                        </label>
                    </div>
                </Form.Group>
                <div className="css-center">
                    <Form.Button basic color='teal' type='button' onClick={this.updateTemplate}>Update</Form.Button>
                </div>
            </Form>
        )
    }
}

export default EditTemplate