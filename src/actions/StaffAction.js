import fetch from 'isomorphic-fetch'
import {SCHOOL_STAFF} from './actionType'
import {getAPI, postAPI, putAPI,deleteAPI, apiLocation} from '../commons/Util'

function receiveAllStaffs(json){
    return {
        type: SCHOOL_STAFF,
        staffs: json,
    }
}

function client_getAllStaffs(schoolId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/staffs`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllStaffs(json)))
    }
}

export function allStaffs(schoolId){
    return dispatch => {
        return dispatch(client_getAllStaffs(schoolId))
    }
}

function client_addStaff(schoolId, staff){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/staffs`,
            postAPI(staff)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStaffs(schoolId)))
    }
}

export function addStaff(schoolId,staff){
    return dispatch =>{
        return dispatch(client_addStaff(schoolId, staff))
    }
}

function client_updateStaff(schoolId,staff){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/staffs/${staff.staffId}`,
            putAPI(staff)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStaffs(schoolId)))
    }

}

export function updateStaff(schoolId,staff){
    return dispatch =>{
        return dispatch(client_updateStaff(schoolId,staff))
    }
}

function client_deleteStaff(schoolId,staffId){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/staffs/${staffId}`,
            deleteAPI()
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllStaffs(schoolId)))
    }

}

export function deleteStaff(schoolId,staffId){
    return dispatch =>{
        return dispatch(client_deleteStaff(schoolId,staffId))
    }
}