import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Message, Checkbox } from 'semantic-ui-react'
import './Notification.css'

class StudentNotification extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedStandardId: '',
            title: '',
            text: '',
            status: false,
            error: false,
            checked: false,
            visible: false,
            filePath: '',
            fileName: '',
            loadStatus: '',
            standardSelection : false,
            emptyMessage : false
        }
        this.selectStandard = this.selectStandard.bind(this)
        this.notifyAll = this.notifyAll.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.allStandards(school.schoolId))
    }

    selectStandard = (event) => {
        if (event.target.value !== "") {
            document.getElementById('checkbox-school').disabled = true
            this.setState({
                selectedStandardId: event.target.value
            })
        }
        else {
            this.setState({
                selectedStandardId: ''
            })
            document.getElementById('checkbox-school').disabled = false
        }
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
        if (this.state.selectedStandardId !== '') {
            if (this.state.title === '' || this.state.text === '') {
                this.setState({
                    emptyMessage : true
                })
                setTimeout(() => {
                    this.setState({ emptyMessage: false })
                }, 3000)
            }
            else {
                this.setState({
                    title: '',
                    text: '',
                    status: true,
                    selectedStandardId: ''
                })
                actions.notifyStudentsInStandard(school.schoolId, school.schoolAdmins[0].saId,
                    this.state.selectedStandardId, { title: this.state.title, text: this.state.text, filePath: this.state.filePath })
                setTimeout(() => {
                    this.setState({
                        status: false
                    })
                }, 3000)
                document.getElementById('checkbox-school').disabled = false
            }
        }
        else if (document.getElementById('checkbox-school').checked === true) {
            if (this.state.title === '' || this.state.text === '') {
                this.setState({
                    emptyMessage : true
                })
                setTimeout(() => {
                    this.setState({ emptyMessage: false })
                }, 3000)
            }
            else {
                this.setState({
                    checked: false,
                    title: '',
                    text: '',
                    status: true
                })
                actions.notifyAllStudentsInSchool(school.schoolId, school.schoolAdmins[0].saId,
                    { title: this.state.title, text: this.state.text })
                setTimeout(() => {
                    this.setState({
                        status: false
                    })
                }, 5000)
                document.getElementById('standard-dropdown').disabled = false
            }
        }
        else {
            this.setState({
                standardSelection : true
            })
            setTimeout(() => {
                this.setState({ standardSelection: false })
            }, 3000)
        }
    }

    notifyAll = () => {
        this.setState({
            checked: !this.state.checked,
            selectedStandardId: ''
        })
        if (document.getElementById('checkbox-school').checked === true) {
            document.getElementById('standard-dropdown').disabled = true
        }
        if (document.getElementById('checkbox-school').checked === false) {
            document.getElementById('standard-dropdown').disabled = false
        }
    }

    render() {

        const { standards } = this.props
        const { title, text, status, error, loadStatus, emptyMessage, standardSelection } = this.state
        return (
            <div>
                <Form success onSubmit={this.handleSubmit}>
                    {
                        status &&
                        <Message size='small' color="green">Notification Sent successfully</Message>

                    }
                    {
                        error &&
                        <Message size='small' color="red">Not able to send notification</Message>
                    }
                    {
                        emptyMessage &&
                        <Message size='small' color="red">Please enter the title and message body to send a message</Message>
                    }
                    {
                        standardSelection &&
                        <Message size='small' color="red">Please select the recepients</Message>
                    }

                    <Form.Field className="nine wide all-students">
                        <Checkbox id="checkbox-school"
                            label='Please tick this box if you want to send notification to all students in the school'
                            checked={this.state.checked}
                            onChange={this.notifyAll}
                        />
                    </Form.Field>

                    <Form.Field className="five wide" required>
                        <select id="standard-dropdown" onChange={this.selectStandard} value={this.state.selectedStandardId} className="ui dropdown ui compact menu ">
                            <option value="">Standards</option>
                            {standards && standards.map(function (standard, id) {
                                return (
                                    <option key={id} value={standard.standardId}>{standard.name}</option>
                                )
                            })}

                        </select>
                    </Form.Field>

                    <Form.Field required
                        id='form-input-title'
                        control={Input}
                        label='Title'
                        name="title"
                        value={title}
                        placeholder='Title'
                        onChange={this.handleChange}
                    />
                    <Form.Field required
                        id='form-input-text'
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
                        <div className='ui field '>
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
                        <Button basic color='teal' type="button" className='sendButton' onClick={this.handleSubmit}>Send Notification</Button>
                </Form>

            </div>
        )
    }
}

export default StudentNotification