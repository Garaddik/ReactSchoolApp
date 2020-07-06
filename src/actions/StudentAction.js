import { SCHOOL_STUDENTS, STUDENT_DETAILS } from './actionType'
import { getAPI, postAPI, putAPI, apiLocation, deleteAPI } from '../commons/Util'

function receiveAllStudents(json) {
    return {
        type: SCHOOL_STUDENTS,
        students: json
    }
}

function receiveStudentDetails(json) {
    return {
        type: STUDENT_DETAILS,
        studentDetails: json
    }
}

function client_allStudents(schoolId, standardId, year) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/ssassociatedstudents?year=${year}`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveAllStudents(json)))
    }
}

export function allStudents(schoolId, standardId, year) {
    return dispatch => {
        return dispatch(client_allStudents(schoolId, standardId, year))
    }
}

function client_addStudent(schoolId, standardId, student, year) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/students?year=${year}`,
            postAPI(student)
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_allStudents(schoolId, standardId, year)))
    }

}

export function addStudent(schoolId, standardId, student, year) {
    return dispatch => {
        return dispatch(client_addStudent(schoolId, standardId, student, year))
    }
}

export function client_getStudentDetails(schoolId, studentId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveStudentDetails(json)))
    }
}

export function getStudentDetails(schoolId, studentId) {
    return dispatch => {
        return dispatch(client_getStudentDetails(schoolId, studentId))
    }
}

 function client_updateStudent(schoolId, student) {
    return fetch(`${apiLocation()}/schools/${schoolId}/students/${student.studentId}`,
        putAPI(student)
    )
        .then(response => {
            if(response.status === 200){
                return true
            }
        })
}

export function updateStudent(schoolId, student) {
    return client_updateStudent(schoolId, student)
}

 function client_updateStudentMoreInfo(schoolId, studentId, studentMoreInfo) {
    return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}/more`,
        putAPI(studentMoreInfo)
    )
        .then(response => {
            if(response.status === 200){
                return true
            }
        })
}

export function updateStudentMoreInfo(schoolId, studentId, studentMoreInfo) {
    return client_updateStudentMoreInfo(schoolId, studentId, studentMoreInfo)
}

function client_deleteStudent(schoolId, studentId, standardId,year) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/students/${studentId}`,
            deleteAPI())
            .then(response => {
                return response.status
            })    
            .then(status => dispatch(client_allStudents(schoolId, standardId, year)))
    }
}

export function deleteStudent(schoolId, studentId,standardId,year) {
    return dispatch => {
        return dispatch(client_deleteStudent(schoolId, studentId, standardId,year))
    }
}