import { STANDARD_TIMETABLE, TIMETABLE, SSS } from './actionType'
import { getAPI, postAPI, apiLocation, putAPI, deleteAPI } from '../commons/Util'

function receiveStandardTimetable(json) {
    return {
        type: STANDARD_TIMETABLE,
        standardTimetable: json
    }
}

function client_createTimetable(schoolId, standardId, weeklySchedule) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/timetable`,
            postAPI(weeklySchedule)
        )
            .then(response => {
                return response.status
            })
    }
}

export function createTimetable(schoolId, standardId, weeklySchedule) {
    return dispatch => {
        return dispatch(client_createTimetable(schoolId, standardId, weeklySchedule))
    }
}


function receiveTimetable_v2(json) {
    return {
        type: TIMETABLE,
        timeTable: json
    }
}

function client_createTimetable_v2(schoolId, standardId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/createtimetable`,
            getAPI()
        )
            .then(response => {
                if (response.status === 201) {
                    return response.json()
                } else {
                    return {}
                }
            })
            .then(json => dispatch(receiveTimetable_v2(json)))
    }
}

export function createTimetable_v2(schoolId, standardId) {
    return dispatch => {
        return dispatch(client_createTimetable_v2(schoolId, standardId))
    }
}


function client_getStandardTimetable(schoolId, standardId, yearId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/timetable?year=${yearId}`,
            getAPI())
            .then(response => {
                if (response.status === 204) {
                    return {
                        noTimetable: "No timetable available for selected standard, please"
                    }
                }
                else {
                    return response.json()
                }
            })
            .then(json => dispatch(receiveStandardTimetable(json)))
    }
}

export function getStandardTimetable(schoolId, standardId, yearId) {
    return dispatch => {
        return dispatch(client_getStandardTimetable(schoolId, standardId, yearId))
    }
}

function client_updateStandardTimetable(schoolId, standardId, timetableId, weeklySchedule, yearId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/timetable/${timetableId}?year=${yearId}`,
            putAPI(weeklySchedule))
            .then(response => {
                return response.status
            })
    }
}

export function updateStandardTimetable(schoolId, standardId, timetableId, weeklySchedule, yearId) {
    return dispatch => {
        return dispatch(client_updateStandardTimetable(schoolId, standardId, timetableId, weeklySchedule, yearId))
    }
}

function client_deleteTimetable(schoolId, standardId, timetableId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/standards/${standardId}/timetable/${timetableId}`,
            deleteAPI()
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_getStandardTimetable(schoolId, standardId)))
    }
}

export function deleteTimetable(schoolId, standardId, timetableId) {
    return dispatch => {
        return dispatch(client_deleteTimetable(schoolId, standardId, timetableId))
    }
}


function client_associate(schoolId, standardId, subjectId, staffId, eduYearId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/sssassociation/${standardId}/${subjectId}?staffid=${staffId}&year=${eduYearId}`,
            getAPI()
        )
            .then(response => {
                return response.status
            })
            .then(status =>
                dispatch(client_getss(schoolId, standardId, eduYearId)))
    }
}

export function associate(schoolId, standardId, subjectId, staffId, eduYearId) {
    return dispatch => {
        return dispatch(client_associate(schoolId, standardId, subjectId, staffId, eduYearId))
    }
}



function receivesss(json) {
    return {
        type: SSS,
        sss: json
    }
}

function client_getss(schoolId, standardId, eduYearId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/sssassociation/${standardId}?year=${eduYearId}`,
            getAPI()
        )
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return []
                }
            })
            .then(json => dispatch(receivesss(json)))
    }
}


export function getsss(schoolId, standardId, eduYearId) {
    return dispatch => {
        return dispatch(client_getss(schoolId, standardId, eduYearId))
    }
}

function client_deleteAssociatation(schoolId, selectedStandardId, eduYearId, sssId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/sssassociation/${sssId}`,
            deleteAPI())
            .then(response => {
                return response.status
            })
            .then(status =>
                dispatch(client_getss(schoolId, selectedStandardId, eduYearId)))
    }
}

export function deleteAssociatation(schoolId, selectedStandardId, eduYearId, sssId) {
    return dispatch => {
        return dispatch(client_deleteAssociatation(schoolId, selectedStandardId, eduYearId, sssId))
    }
}