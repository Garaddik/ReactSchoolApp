import fetch from 'isomorphic-fetch'
import { SCHOOL_TEMPLATE, UPLOAD_IMAGE } from './actionType'
import { getAPI, postAPI, putAPI, apiLocation, postmultiPartAPI } from '../commons/Util'


function recieveSchoolTemplate(json) {
    return {
        type: SCHOOL_TEMPLATE,
        schoolTemplate: json,
    }
}

function client_getSelectedSchoolTemplate(schoolId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/templates`,
            getAPI()
        )
            .then(response => {
                if (response.status === 200)
                    return response.json()
                else
                    return {}
            })
            .then(json => dispatch(recieveSchoolTemplate(json)))
    }
}
export function getSelectedSchoolTemplate(schoolId) {
    return dispatch => {
        return dispatch(client_getSelectedSchoolTemplate(schoolId))
    }
}

function recieveImagePath(json) {
    return {
        type: UPLOAD_IMAGE,
        imagePath: json
    }
}

function client_fileUploadHandler(schoolId, fileForm) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/images/upload`,
            postAPI(fileForm)
        )
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(recieveImagePath(json)))

    }
}
export function fileUploadHandler(schoolId, fileForm) {
    return dispatch => {
        return dispatch(client_fileUploadHandler(schoolId, fileForm))
    }
}

function client_addTemplate(schoolId, template) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/templates`,
            postAPI(template))
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 201) {
                    dispatch(getSelectedSchoolTemplate(schoolId))
                }
            })
    }
}

export function addTemplate(schoolId, template) {
    return dispatch => {
        return dispatch(client_addTemplate(schoolId, template))
    }
}


function client_updateTemplate(schoolId, templateId, template) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}`,
            putAPI(template))
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 200) {
                    dispatch(getSelectedSchoolTemplate(schoolId))
                }
            })
    }
}

export function updateTemplate(schoolId, templateId, template) {
    return dispatch => {
        return dispatch(client_updateTemplate(schoolId, templateId, template))
    }
}

function client_addAddress(schoolId, templateId, address) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}/address`,
            postAPI(address))
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 201) {
                    dispatch(getSelectedSchoolTemplate(schoolId))
                }
            })
    }
}

export function addAddress(schoolId, templateId, address) {
    return dispatch => {
        return dispatch(client_addAddress(schoolId, templateId, address))
    }
}


function client_updateAddress(schoolId, templateId, addressId, address) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}/address/${addressId}`,
            putAPI(address))
            .then(response => {
                return response.status
            })
            .then(status => {
                if (status === 200) {
                    dispatch(getSelectedSchoolTemplate(schoolId))
                }
            })
    }
}

export function updateAddress(schoolId, templateId, addressId, address) {
    return dispatch => {
        return dispatch(client_updateAddress(schoolId, templateId, addressId, address))
    }
}


function client_uploadTemplateLogo(schoolId, fileForm) {
    return fetch(`${apiLocation()}/schools/${schoolId}/templates/logo`,
        postmultiPartAPI(fileForm))
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
            else
                return {}
        })
}
export function uploadTemplateLogo(schoolId, fileForm) {
    return client_uploadTemplateLogo(schoolId, fileForm)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               