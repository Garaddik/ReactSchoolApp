import fetch from 'isomorphic-fetch'
import {SCHOOL_NONTEACHINGSTAFF} from './actionType'
import {getAPI, postAPI, putAPI,deleteAPI, apiLocation} from '../commons/Util'

function receiveAllNonTeachingStaffs(json){
    return {
        type: SCHOOL_NONTEACHINGSTAFF,
        nonTeachingStaffs: json,
    }
}

function client_getAllNonTeachingStaffs(schoolId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/nonteachingstaffs`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllNonTeachingStaffs(json)))
    }
}

export function allNonTeachingStaffs(schoolId){
    return dispatch => {
        return dispatch(client_getAllNonTeachingStaffs(schoolId))
    }
}

function client_addNonTeachingStaff(schoolId, nonTeachingStaff){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/nonteachingstaffs`,
            postAPI(nonTeachingStaff)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllNonTeachingStaffs(schoolId)))
    }
}

export function addNonTeachingStaff(schoolId,nonTeachingStaff){
    return dispatch =>{
        return dispatch(client_addNonTeachingStaff(schoolId, nonTeachingStaff))
    }
}

function client_updateNonTeachingStaff(schoolId,nonTeachingStaff){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/nonteachingstaffs/${nonTeachingStaff.nonTeachingStaffId}`,
            putAPI(nonTeachingStaff)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllNonTeachingStaffs(schoolId)))
    }

}

export function updateNonTeachingStaff(schoolId,nonTeachingStaff){
    return dispatch =>{
        return dispatch(client_updateNonTeachingStaff(schoolId,nonTeachingStaff))
    }
}

function client_deleteNonTeachingStaff(schoolId,nonTeachingStaffId){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/nonteachingstaffs/${nonTeachingStaffId}`,
            deleteAPI()
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllNonTeachingStaffs(schoolId)))
    }

}

export function deleteNonTeachingStaff(schoolId,nonTeachingStaffId){
    return dispatch =>{
        return dispatch(client_deleteNonTeachingStaff(schoolId,nonTeachingStaffId))
    }
}