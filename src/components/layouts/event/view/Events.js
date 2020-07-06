import React, { Component } from 'react'
import addLogo from '../../../../public/add-button.png'
import EventCard from './EventCard'
import { Redirect } from 'react-router-dom'
import { EVENT } from '../../../../actions/actionType'

class Events extends Component {

    constructor(props) {
    super(props)
        this.state = {
            redirect: false,
            events: this.props.event
        }
        this.addNewEvent = this.addNewEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    componentDidMount() {
        const { dispatch, actions, school } = this.props
        dispatch(actions.getAllEvents(school.schoolId))
    }

    addNewEvent() {
        const { dispatch } = this.props
        dispatch({
            type: EVENT,
            event: {}
        })
        this.setState({
            redirect: true
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.events !== this.state.events) {
            this.setState({ events: nextProps.events });
        }
    }

    deleteEvent(event) {
        let eventsObject = this.state.events
        eventsObject = eventsObject.filter(function (el) { return el.eventId !== event.eventId; });
        this.setState({
            events: eventsObject
        })
    }

    render() {
        const { redirect, events } = this.state
        const { dispatch, actions, school } = this.props
        const deleteEvent = this.deleteEvent
        return (
            <div className="ui four stackable small cards">
                {redirect && <Redirect to="events/add" />}
                {events && events.map(function (event, ids) {
                    return (
                        <EventCard event={event} dispatch={dispatch} key={ids} actions={actions} school={school} deleteEvent = {deleteEvent}/>
                    )
                })}
                <div className='border' onClick={this.addNewEvent}>
                    <div>
                        <img src={addLogo} alt="logo" />
                    </div>
                    <div>
                        Add New Event
                    </div>
                </div>
            </div>
        )
    }
}

export default Events