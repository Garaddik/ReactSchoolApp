import { STUDENT_ADDRESS } from './actionType'
import { getAPI, postAPI, putAPI, apiLocation } from '../commons/Util'

function receiveStudentAddress(json) {
    return {
        type: STUDENT_ADDRESS,
        studentAddress: json
    }
}

function client_getStudentAddress(schoolId, studentId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}/address`,
            getAPI()
        )
            .then(response => {
                if(response.status === 200){
                    return response.json()
                }
                else {
                    return null
                }
            })
            .then(json => dispatch(receiveStudentAddress(json)))
    }
}

export function getStudentAddress(schoolId, studentId) {
    return dispatch => {
        return dispatch(client_getStudentAddress(schoolId, studentId))
    }
}

function client_addStudentAddress(schoolId, studentId, studentAddress) {
    return dispatch =>  {
    return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}/address`,
    postAPI(studentAddress)
    )
        .then(response => {
            if(response.status === 200) {
                return true
            }
        })
        .then(status => dispatch(getStudentAddress(schoolId, studentId)))
    }
}

export function addStudentAddress(schoolId, studentId, studentAddress) {
    return dispatch => {
        return dispatch(client_addStudentAddress(schoolId, studentId, studentAddress))
    }
}
function client_updateStudentAddress(schoolId, studentId, studentAddress) {
    return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}/address/${studentAddress.addressId}`,
    putAPI(studentAddress)
    )
        .then(response => {
            if(response.status === 200) {
                return true
            }
        })
}

export function updateStudentAddress(schoolId, studentId, studentAddress) {
    return client_updateStudentAddress(schoolId, studentId, studentAddress)
}