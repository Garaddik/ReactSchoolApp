
import fetch from 'isomorphic-fetch'
import { postmultiPartAPI, apiLocation, deleteAPI, putAPI } from '../commons/Util'

function client_uploadTemplateGalleryImage(schoolId, templateId, fileForm, title) {
    return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}/gallery?title=${title}`,
        postmultiPartAPI(fileForm))
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
            else
                return {}
        })
}

export function uploadTemplateGalleryImage(schoolId, templateId, fileForm,title) {
    return client_uploadTemplateGalleryImage(schoolId, templateId, fileForm,title)
}


function client_deleteGalleryImage(schoolId, templateId, galleryId) {
    return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}/gallery/${galleryId}`,
        deleteAPI())
        .then(response => {
            if (response.status === 200) {
                return "SUCCESS"
            }
            else
                return "FAIL"
        })
}

export function deleteGalleryImage(schoolId, templateId, galleryId) {
    return client_deleteGalleryImage(schoolId, templateId, galleryId)
}

function client_updateEventGalleryImageDescription(schoolId, templateId, galleryId, gallery){
    
    return fetch(`${apiLocation()}/schools/${schoolId}/templates/${templateId}/gallery/${galleryId}`,
        putAPI(gallery))
        .then(response => {
          
        })
}

export function updateEventGalleryImageDescription(schoolId, templateId, galleryId, gallery){

    return client_updateEventGalleryImageDescription(schoolId, templateId, galleryId, gallery)
}