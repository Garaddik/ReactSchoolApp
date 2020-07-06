import fetch from 'isomorphic-fetch'
import { SCHOOL_SUBJECTS} from './actionType'
import {getAPI, postAPI, putAPI,deleteAPI,apiLocation} from '../commons/Util'

function receiveAllSubjects(json){
    return {
        type: SCHOOL_SUBJECTS,
        subjects: json,
    }
}

function client_getAllSubjects(schoolId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/subjects`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllSubjects(json)))
    }
}

export function getAllSubjects(schoolId){
    return dispatch => {
        return dispatch(client_getAllSubjects(schoolId))
    }
}

function client_addSubject(schoolId,subject){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/subjects`,
            postAPI(subject)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllSubjects(schoolId)))
    }

}

export function addSubject(schoolId,subject){
    return dispatch =>{
        return dispatch(client_addSubject(schoolId,subject))
    }
}

function client_updateSubject(schoolId,subject){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/subjects/${subject.subjectId}`,
            putAPI(subject)
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllSubjects(schoolId)))
    }

}

export function updateSubject(schoolId,subject){
    return dispatch =>{
        return dispatch(client_updateSubject(schoolId,subject))
    }
}

function client_deleteSubject(schoolId,subjectId){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/subjects/${subjectId}`,
            deleteAPI()
        )
        .then(response => {
            return response.status
        })
        .then(status => dispatch(client_getAllSubjects(schoolId)))
    }

}

export function deleteSubject(schoolId,subjectId){
    return dispatch =>{
        return dispatch(client_deleteSubject(schoolId,subjectId))
    }
}