import React, { Component } from 'react'
import { Icon, Input, TextArea } from 'semantic-ui-react'
import moment from 'moment';
import DatePicker from 'react-datepicker'
import ViewEventImage from './ViewEventImage'
import { Redirect } from 'react-router-dom'

class AddEvent extends Component {
    constructor(props) {
    super(props)
        const { event } = this.props
        if (event.eventId !== undefined) {
            this.state = {
                title: event.title,
                description: event.description,
                eventDate: moment(event.eventDate, "YYYY-MM-DD"),
                loadStatus: '',
                eventId: event.eventId,
                redirect: false
            }
        }
        else {
            this.state = {
                title: '',
                description: '',
                eventDate: moment(),
                loadStatus: '',
                eventId: undefined,
                redirect: false
            }
        }
        this.handleChangeEventDate = this.handleChangeEventDate.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.changeDescription = this.changeDescription.bind(this)
        this.addEvent = this.addEvent.bind(this)
        this.updateEvent = this.updateEvent.bind(this)
        this.backToEventList = this.backToEventList.bind(this)
    }

    changeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }


    changeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleChangeEventDate(date) {
        this.setState({
            eventDate: date
        })
    }

    addEvent() {
        const { actions, school } = this.props
        let data = {
            title: this.state.title,
            description: this.state.description,
            eventDate: this.state.eventDate.format('YYYY-MM-DD')
        }

        this.setState({
            loadStatus: 'loading'
        })
        let response = actions.addEvent(school.schoolId, data)
        response.then(function (response) {
            if (response) {
                this.setState({
                    eventId: response.eventId,
                    loadStatus: ''
                })
            }
        }.bind(this))
    }


    updateEvent() {
        const { actions, school } = this.props
        let data = {
            title: this.state.title,
            description: this.state.description,
            eventDate: this.state.eventDate.format('YYYY-MM-DD')
        }
        this.setState({
            loadStatus: 'loading'
        })
        let response = actions.updateEvent(school.schoolId, this.state.eventId, data)
        response.then(function (response) {
            if (response) {
                this.setState({
                    loadStatus: ''
                })
            }
        }.bind(this))
    }

    backToEventList() {
        this.setState({
            redirect: true
        })
    }
    render() {
        const { loadStatus, redirect } = this.state
        return (
            <div>
                {redirect && <Redirect to="/dashboard/events" />}
                <h3 className='ui dividing header'> <Icon name="arrow left" onClick={this.backToEventList} /> Add Event</h3>
                <div className={"ui form " + loadStatus}>
                    <div className="field">
                        <label>Event Name</label>
                        <Input onChange={this.changeTitle} control='input' placeholder='Enter event title' defaultValue={this.state.title}></Input>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <TextArea style={{ minHeight: 150 }} onChange={this.changeDescription} control='input' placeholder='Enter event Description' defaultValue={this.state.description}></TextArea>
                    </div>
                    <div className="two wide field">
                        <label>Event Date</label>
                        <DatePicker
                            selected={this.state.eventDate}
                            onChange={this.handleChangeEventDate}
                            dateFormat="DD-MM-YYYY"
                        />
                    </div>
                    {
                        this.state.eventId === undefined &&
                        <button onClick={this.addEvent} className="ui teal button" type="submit">Save & Continue
                            <Icon className="icon-css" name="chevron right"></Icon>
                        </button>
                    }
                    {
                        this.state.eventId !== undefined &&
                        <button onClick={this.updateEvent} className="ui teal button" type="submit">Update
                            <Icon className="icon-css" name="chevron right"></Icon>
                        </button>
                    }
                </div>
                {
                    this.state.eventId !== undefined &&
                    <div>
                        <span className='ui clearing divider' />
                        <ViewEventImage {...this.props} eventId={this.state.eventId} images={this.props.event.eventImageList} />
                    </div>
                }
            </div>
        )
    }
}

export default AddEvent