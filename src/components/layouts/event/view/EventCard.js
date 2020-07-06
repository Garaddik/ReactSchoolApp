import React, { Component } from 'react'
import './EventImage.css'
import { EVENT } from '../../../../actions/actionType'
import { Redirect } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
const TITLE_MAX_LENGTH = 70;
const DESC_MAX_LENGTH = 150;


class EventCard extends Component {
    constructor(props) {
    super(props)
        this.state = {
            redirect: false
        }
        this.updateEvent = this.updateEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    deleteEvent(){
        const {actions, school, event, deleteEvent} = this.props
        const response = actions.deleteEvent(school.schoolId, event.eventId)
        response.then(function (response) {
            if (response) {
                deleteEvent(event);
            }
        })
    }
    updateEvent() {
        const {dispatch, event} = this.props
        dispatch({
            type: EVENT,
            event: event
        })
        this.setState({
            redirect: true
        })
    }

   
    render() {
        const { redirect } = this.state
        const { event } = this.props
        let imagePath;
        if (event.eventImageList !== undefined) {
            imagePath = event.eventImageList[0].imagePath
        }
        let desc, title;
        if (event.title !== undefined && event.title.length > TITLE_MAX_LENGTH) {
            title = event.title.substring(0, TITLE_MAX_LENGTH) + ' ....'
        }
        else {
            title = event.title === undefined ? '' : event.title
        }
        if (event.description !== undefined && event.description.length > DESC_MAX_LENGTH) {
            desc = event.description.substring(0, DESC_MAX_LENGTH) + ' ....'
        }
        else {
            desc = event.description === undefined ? '' : event.description
        }
        return (
            <div className="ui card view-card">
                {redirect && <Redirect to="events/add" />}
                <div className="ui floating delete-img-css" onClick={this.deleteEvent}><Icon className="ui circular teal top right" name="trash"/></div>
                <div className="image">
                    <img alt='' src={imagePath}/>
                </div>
                <div className="content">
                    <a className="header" onClick={this.updateEvent}>{title}</a>
                    <div className="meta">
                        <span className="date">Event Date: {' ' + event.eventDate}</span>
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                </div>
            </div>
        )
    }
}

export default EventCard