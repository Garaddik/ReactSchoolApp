import fetch from 'isomorphic-fetch'
import { postAPI, apiLocation, postmultiPartAPI } from '../commons/Util'

function client_submitStudentForm(schoolId, standardId, request) {
    return fetch(`${apiLocation()}/schools/${schoolId}/admission/standards/${standardId}`,
        postAPI(request)
    )
        .then(response => {
            if (response.status === 200)
                return { status: response.status }
            else {
                return { status: 500 }
            }
        })
}

export function submitStudentForm(schoolId, standardId, request) {
    
    return client_submitStudentForm(schoolId, standardId, request)
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