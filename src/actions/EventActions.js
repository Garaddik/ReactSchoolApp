import { EVENTS } from './actionType'
import { getAPI, postAPI, putAPI, deleteAPI, apiLocation, postmultiPartAPI } from '../commons/Util'

function client_addEvent(schoolId, event) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events`,
        postAPI(event))
        .then(response => {
            if (response.status === 201) {
                return response.json()
            } else {
                return {}
            }

        })
}

export function addEvent(schoolId, event) {
    return client_addEvent(schoolId, event)
}

function client_updateEvent(schoolId, eventId, event) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events/${eventId}`,
        putAPI(event))
        .then(response => {
            return response
        })
}

export function updateEvent(schoolId, eventId, event) {
    return client_updateEvent(schoolId, eventId, event)
}

function client_deleteEventImage(schoolId, eventId, eiId) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events/${eventId}/images/${eiId}`,
        deleteAPI())
        .then(response => {
            return response
        })
}

export function deleteEventImage(schoolId, eventId, eiId) {
    return client_deleteEventImage(schoolId, eventId, eiId)
}



function client_uploadEventGalleryImage(schoolId, eventId, fileForm,description) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events/${eventId}/gallery?description=${description}`,
        postmultiPartAPI(fileForm))
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
            else
                return {}
        })
}

function client_updateEventGalleryImageDescription(schoolId, eventId, eiId,gallery) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events/${eventId}/images/${eiId}`,
        putAPI(gallery))
        .then(response => {
          return {}  
        })
}

export function updateEventGalleryImageDescription(schoolId, eventId, eiId,gallery) {
    return client_updateEventGalleryImageDescription(schoolId, eventId, eiId,gallery)
}

export function uploadEventGalleryImage(schoolId, eventId, fileForm, description) {
    return client_uploadEventGalleryImage(schoolId, eventId, fileForm, description)
}

function receiveAllEvents(json) {
    return {
        type: EVENTS,
        events: json,
    }
}

function client_getAllEvents(schoolId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/events`,
            getAPI()
        )
            .then(response => {
                if (response.status === 200)
                    return response.json()
                else
                    return []
            })
            .then(json => dispatch(receiveAllEvents(json)))
    }
}

export function getAllEvents(schoolId) {
    return dispatch => {
        return dispatch(client_getAllEvents(schoolId))
    }
}


function client_deleteEvent(schoolId, eventId) {
    return fetch(`${apiLocation()}/schools/${schoolId}/events/${eventId}`,
        deleteAPI())
        .then(response => {
            return response
        })
}

export function deleteEvent(schoolId, eventId) {
    return client_deleteEvent(schoolId, eventId)
}