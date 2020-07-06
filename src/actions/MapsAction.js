import fetch from 'isomorphic-fetch'
import {SCHOOL_TRACKS, DRIVER_DETAILS} from './actionType'
import {getAPI, apiLocation} from '../commons/Util'

function receiveAllTracks(json){
    return {
        type: SCHOOL_TRACKS,
        tracks: json,
    }
}

function receiveDriverDetails(json){
    return {
        type: DRIVER_DETAILS,
        driverDetails: json,
    }
}

function client_getAllTracks(schoolId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/tracks`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllTracks(json)))
    }
}

export function getAllTracks(schoolId){
    return dispatch => {
        return dispatch(client_getAllTracks(schoolId))
    }
}

function client_getDriverDetails(schoolId, nonTeachingStaffId){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/nonteachingstaffs/${nonTeachingStaffId}`,
            getAPI()
        )
        .then(response => {
            return response.json()
            })
            .then(json => dispatch(receiveDriverDetails(json)))
        }
    }
    
    export function getDriverDetails(schoolId, nonTeachingStaffId){
        return dispatch => {
            return dispatch(client_getDriverDetails(schoolId, nonTeachingStaffId))
        }
    }