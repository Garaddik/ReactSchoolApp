import {SCHOOL_STANDARDS} from './actionType'
import {getAPI, postAPI, putAPI,deleteAPI,apiLocation} from '../commons/Util'

function receiveAllStandards(json){
    return {
        type: SCHOOL_STANDARDS,
        standards: json,
    }
}


function client_getAllStandards(schoolId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/standards`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllStandards(json)))
    }
}

export function allStandards(schoolId){
    return dispatch => {
        return dispatch(client_getAllStandards(schoolId))
    }
}

function client_addStandard(schoolId, standard){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards`,
            postAPI(standard)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStandards(schoolId)))
    }

}

export function addStandard(schoolId,standard){
    return dispatch =>{
        return dispatch(client_addStandard(schoolId, standard))
    }
}

function client_updateStandard(schoolId,standard){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standard.standardId}`,
            putAPI(standard)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStandards(schoolId)))
    }

}

export function updateStandard(schoolId,standard){
    return dispatch =>{
        return dispatch(client_updateStandard(schoolId,standard))
    }
}

function client_deleteStandard(schoolId,standardId){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}`,
            deleteAPI()
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStandards(schoolId)))
    }

}

export function deleteStandard(schoolId,standardId){
    return dispatch =>{
        return dispatch(client_deleteStandard(schoolId,standardId))
    }
}