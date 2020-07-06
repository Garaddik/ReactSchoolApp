import { STANDARD_ATTENDANCE } from './actionType'
import { apiLocation, getAPI } from '../commons/Util'

function receiveStudentList(json) {
    return {
        type: STANDARD_ATTENDANCE,
        studentAttendanceList: json,
    }
}

function client_getAllStudentsAttendance(schoolId, standardId, startDate, endDate, subjectId) {
    var api =  `${apiLocation()}/schools/${schoolId}/standards/${standardId}/getstudentsattendance?startDate=${startDate}&endDate=${endDate}`;
    if (subjectId !== '') {
       api = `${apiLocation()}/schools/${schoolId}/standards/${standardId}/getstudentsattendance?startDate=${startDate}&endDate=${endDate}&subjectid=${subjectId}`;
    }
    return dispatch => {
        return fetch(api,
        getAPI())
            .then(response => {
            return response.json()
        })
            .then(json => dispatch(receiveStudentList(json)))
    }
}

export function allStudentsAttendance(schoolId, standardId, startDate, endDate, subjectId) {
    return dispatch => {
        return dispatch(client_getAllStudentsAttendance(schoolId, standardId, startDate, endDate, subjectId))
    }
}   