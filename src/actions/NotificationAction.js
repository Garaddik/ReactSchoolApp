import { apiLocation, getAPI, postAPI, postmultiPartAPI } from '../commons/Util'
import { NOTIFICATIONS } from './actionType'

function client_notifyStaff(schoolId, adminId, notification) {
    return fetch(`${apiLocation()}/schools/${schoolId}/notifications/notify/staffs/${adminId}`,
        postAPI(notification))
        .then(response => {
            return response.status
        })
}

export function notifyStaff(schoolId, adminId, notification) {
    return client_notifyStaff(schoolId, adminId, notification)
}



function client_notifyStudentsInStandard(schoolId, adminId, standardId, notification) {
    return fetch(`${apiLocation()}/schools/${schoolId}/notifications/notify/standards/${standardId}/students?said=${adminId}`,
        postAPI(notification))
        .then(response => {
            return response.status
        })
}

export function notifyStudentsInStandard(schoolId, adminId, standardId, notification) {
    return client_notifyStudentsInStandard(schoolId, adminId, standardId, notification)
}

function client_notifyAllStudentsInSchool(schoolId, adminId, notification) {
    return fetch(`${apiLocation()}/schools/${schoolId}/notifications/notify/students?said=${adminId}`,
        postAPI(notification))
        .then(response => {
            return response.status
        })
}

export function notifyAllStudentsInSchool(schoolId, adminId, notification) {
    return client_notifyAllStudentsInSchool(schoolId, adminId, notification)
}


function client_uploadNotificationFile(schoolId, fileForm) {
    return fetch(`${apiLocation()}/schools/${schoolId}/notifications/file`,
        postmultiPartAPI(fileForm))
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
            else
                return {}
        })
}

export function uploadNotificationFile(schoolId, fileForm) {
    return client_uploadNotificationFile(schoolId, fileForm)
}


function receiveAllNotifications(json){
    return {
        type: NOTIFICATIONS,
        notifications: json,
    }
}

function client_allNotifications(schoolId,adminId){
return dispatch => {
    return fetch(`${apiLocation()}/schools/${schoolId}/notifications/admins/${adminId}`,
        getAPI()
    )
    .then(response => {
        return response.json()
        })
        .then(json => dispatch(receiveAllNotifications(json)))
    }
}

export function allNotifications(schoolId,adminId){
    return dispatch => {
        return dispatch(client_allNotifications(schoolId,adminId))
    }
}