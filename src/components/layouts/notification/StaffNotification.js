import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react'
import './Notification.css'

class StaffNotification extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            status: false,
            error: false,
            filePath: '',
            fileName: '',
            loadStatus: '',
            emptyMessage : false
        }
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }

    fileSelectedHandler(event) {
        this.setState({
            loadStatus: 'loading'
        })
        const { school, actions } = this.props
        if (event.target.files !== undefined) {
            let name = event.target.files[0].name
            const fileForm = new FormData()
            fileForm.append('file', event.target.files[0])
            let response = actions.uploadNotificationFile(school.schoolId, fileForm)
            response.then(function (response) {
                if (response) {
                    this.setState({
                        filePath: response.filePath,
                        fileName: name,
                        loadStatus: ''
                    })
                }
            }.bind(this))
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { actions, school } = this.props
        if(this.state.text !== '' && this.state.title !== ''){
            actions.notifyStaff(school.schoolId, school.schoolAdmins[0].saId, { title: this.state.title, text: this.state.text, filePath: this.state.filePath })
            this.setState({ title: '', text: '', status : true, filePath: '' ,fileName: '' })
            setTimeout(() => {
                this.setState({ status: false })
            }, 3000)
        }
        else{
            this.setState({
                emptyMessage : true
            })
            setTimeout(() => {
                this.setState({ emptyMessage: false })
            }, 3000)
        }
        
    }

    render() {
        const { title, text, status, error, loadStatus, emptyMessage } = this.state
        return (
            <div>
                <Form success onSubmit={this.handleSubmit}>
                    {
                        status && <Message size='small' color="green">Notification Sent successfully</Message>
                    }
                    {
                        error && <Message size='small' color="red">Not able to send notification</Message>
                    }
                    {
                        emptyMessage && <Message size='small' color="red">Please enter the title and message body to send a message</Message>
                    }
                    <Form.Group widths='equal'>
                        <Form.Field required
                            id='form-input-control-first-name'
                            control={Input}
                            label='Title'
                            name="title"
                            value={title}
                            placeholder='Title'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Field required
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name="text"
                        value={text}
                        placeholder='Message'
                        onChange={this.handleChange}
                    />

                    <Form.Group widths='16'>
                        <div className="ui field">
                            {

                                this.state.fileName !== '' &&
                                <label> Attached File: {this.state.fileName} </label>
                            }
                        </div>
                    </Form.Group>
                    <Form.Group widths='16'>
                        <div className='ui field'>
                                <input type="file" onChange={this.fileSelectedHandler} className="inputfile" id="embedpollfileinput" />
                                <label htmlFor="embedpollfileinput" className={"ui basic teal huge " + loadStatus + "  button"}>
                                    <i className="ui upload icon"></i>
                                    Upload File
                                </label>
                            <div className="ui red">
                                Max Size: 50MB
                            </div>
                        </div>
                    </Form.Group>
                    <Button basic color='teal' className = "next-css sendButton" type="button" onClick={this.handleSubmit}>Send Notification</Button>
                </Form>
            </div>
        )
    }
}

export default StaffNotification