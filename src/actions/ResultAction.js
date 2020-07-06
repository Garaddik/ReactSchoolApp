import {STANDARD_RESULT, STUDENT_RESULT} from './actionType'
import {getAPI, apiLocation, postAPI, putAPI} from '../commons/Util'

function receiveStandardResults(json){
    return {
        type: STANDARD_RESULT,
        results: json,
    }
}
function receiveStudentResult(json){
    return {
        type: STUDENT_RESULT,
        studentResult: json,
    }
}

function client_getResults(schoolId, esid) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/examstandard/${esid}/results`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveStandardResults(json)))
    }
}
export function getResults(schoolId, esid) {
    return dispatch => {
        return dispatch(client_getResults(schoolId, esid))
    }
}

function client_addResults(schoolId, marksList, esid) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/examstandard/${esid}/results`,
            postAPI(marksList)
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_getResults(schoolId, esid)))
    }

}
export function addResults(schoolid, marksList, esid) {
    return dispatch => {
    return dispatch(client_addResults(schoolid, marksList, esid))
    }
}

function client_updateResults(schoolId, marksList, esid) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/examstandard/${esid}/results`,
            putAPI(marksList)
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_getResults(schoolId, esid)))
    }

}
export function updateResults(schoolid, marksList, esid) {
    return dispatch => {
    return dispatch(client_updateResults(schoolid, marksList, esid))
    }
}

function client_getSelectedStudentResult(schoolId, esid, studentId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/examstandard/${esid}/students/${studentId}`,
            getAPI()
        )
        .then(response => {
            return response.json()
        })
        .then(json => dispatch(receiveStudentResult(json)))
    }

}
export function getSelectedStudentResult(schoolid, esid, studentId) {
    return dispatch => {
    return dispatch(client_getSelectedStudentResult(schoolid, esid, studentId))
    }
}