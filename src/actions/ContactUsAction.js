import { apiLocation, postAPI } from '../commons/Util'

function client_addContactUs(contactUs) {
    return fetch(`${apiLocation()}/api/contactus`,
        postAPI(contactUs))
        .then(response => {
            return response.status
        })
}

export function addContactUs(contactUs) {
    return client_addContactUs(contactUs)
}