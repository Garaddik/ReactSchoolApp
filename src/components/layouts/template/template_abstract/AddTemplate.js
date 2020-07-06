import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import './Template.css'

class AddTemplate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            logoPath: '',
            logoError: '',
            titleError: '',
            descError: '',
            uploadStatus: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTemplate = this.addTemplate.bind(this)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }

    addTemplate() {
        if (this.state.title === '') {
            this.setState({
                titleError: 'error'
            })
        } 
        else if (this.state.description === '') {
            this.setState({
                descError: 'error',
                titleError: ''
            })
        } 
        else {
            const { actions, school, dispatch } = this.props
            dispatch(actions.addTemplate(school.schoolId, this.state))
            this.props.parentMethod(0, 2, this.state)
            this.setState({
                logoError: '',
                titleError: '',
                descError: ''
            })
        }
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
                        uploadStatus: ''
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
                    className={'ui field ' + this.state.descError}
                    name="description"
                    value={description}
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
                <div className="css-right">
                    <Form.Button basic color='teal' type='button' onClick={this.addTemplate}>Save</Form.Button>
                </div>
            </Form>
        )
    }
}

export default AddTemplate