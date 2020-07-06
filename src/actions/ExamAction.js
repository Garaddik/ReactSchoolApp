import fetch from 'isomorphic-fetch'
import { EXAMS, ERROR, EXAM_STANDARD_LIST, EXAM } from './actionType'
import { getAPI, postAPI, apiLocation, putAPI, deleteAPI } from '../commons/Util'


function receiveExam(json) {
    return {
        type: EXAM,
        exam: json
    }
}
function client_exam(examId,schoolId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams/${examId}`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveExam(json)))
    }
}

export function exam(examId,schoolId) {
    return dispatch => {
        return dispatch(client_exam(examId,schoolId))
    }
}

function receiveAllExams(json) {
    return {
        type: EXAMS,
        exams: json,
    }
}

function receiveError(errorCode) {
    return {
        type: ERROR,
        errorCode: errorCode,
    }
}

function client_getAllExams(schoolId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveAllExams(json)))
    }
}

export function allExams(schoolId) {
    return dispatch => {
        return dispatch(client_getAllExams(schoolId))
    }
}


function client_addExam(schoolId, exam) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams`,
            postAPI(exam)
        )
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 500) {
                    dispatch((receiveError(status)))
                }
                else {
                    dispatch(client_getAllExams(schoolId))
                    dispatch((receiveError(status)))
                }
            })
    }
}

export function addExam(schoolId, exam) {
    return dispatch => {
        return dispatch(client_addExam(schoolId, exam))
    }
}


function client_updateExam(schoolId, exam) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams/${exam.examId}`,
            putAPI(exam)
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_getAllExams(schoolId)))
    }

}

export function updateExam(schoolId, exam) {
    return dispatch => {
        return dispatch(client_updateExam(schoolId, exam))
    }
}

function client_deleteExam(schoolId, examId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams/${examId}`,
            deleteAPI()
        )
            .then(response => {
                return response.status
            })
            .then(status => dispatch(client_getAllExams(schoolId)))
    }

}

export function deleteExam(schoolId, examId) {
    return dispatch => {
        return dispatch(client_deleteExam(schoolId, examId))
    }
}


function receiveAllExamStandardScheduleList(json) {
    return {
        type: EXAM_STANDARD_LIST,
        examSchedule: json,
    }
}

function client_allExamStandardScheduleList(schoolId, examId, standardId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/exams/${examId}/standards/${standardId}/timetable`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveAllExamStandardScheduleList(json)))
    }
}

export function allExamStandardScheduleList(schoolId, examId, standardId) {
    return dispatch => {
        return dispatch(client_allExamStandardScheduleList(schoolId, examId, standardId))
    }
}


function client_addSchedule(schoolId, examId, standardId, subjectId, esId, schedule) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/schedule/${esId}/associatesubject/${subjectId}/timetable`,
            postAPI(schedule)
        )
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 500) {
                    dispatch((receiveError(status)))
                }
                else {
                    dispatch(client_allExamStandardScheduleList(schoolId, examId, standardId))
                    dispatch((receiveError(status)))
                }
            })
    }
}

export function addSchedule(schoolId, examId, standardId, subjectId, esId, schedule) {
    return dispatch => {
        return dispatch(client_addSchedule(schoolId, examId, standardId, subjectId, esId, schedule))
    }
}


function client_deletescheduleTimeTableSubject(schoolId, examId, standardId, esId, esdId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/schedule/${esId}/timetable/${esdId}`,
            deleteAPI()
        )
            .then(response => {
                return response.status
            })
            .then(status => {
                dispatch(client_allExamStandardScheduleList(schoolId, examId, standardId))
            })
    }
}


export function deletescheduleTimeTableSubject(schoolId, examId, standardId, esId, esdId) {
    return dispatch => {
        return dispatch(client_deletescheduleTimeTableSubject(schoolId, examId, standardId, esId, esdId))
    }
}


function client_updateScheduleTimeTableToSubjects(schoolId, examId, standardId, esId, esdId, subjectId, schedule) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/schedule/${esId}/associatesubject/${subjectId}/timetable/${esdId}`,
            putAPI(schedule)
        )
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 500) {
                    dispatch((receiveError(status)))
                }
                else {
                    dispatch(client_allExamStandardScheduleList(schoolId, examId, standardId))
                    dispatch((receiveError(status)))
                }
            })
    }
}


export function updateScheduleTimeTableToSubjects(schoolId, examId, standardId, esId, esdId, subjectId, schedule) {
    return dispatch => {
        return dispatch(client_updateScheduleTimeTableToSubjects(schoolId, examId, standardId, esId, esdId, subjectId, schedule))
    }
}

