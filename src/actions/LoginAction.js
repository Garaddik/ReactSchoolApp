import 'whatwg-fetch'
import { GET_SCHOOL} from './actionType'
import { apiLocation, getAPI, putAPI } from '../commons/Util'


function recieveFetchSchool(json) {
    return {
        type: GET_SCHOOL,
        school: json
    }
}

function client_fetchSchool(schoolId) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}`,
            getAPI())
            .then(response => {
                if (response.status === 200)
                    return response.json()
                else
                    return {}
            })
            .then(json => dispatch(recieveFetchSchool(json)))
    }
}

export function fetchSchool(schoolId) {
    return dispatch => {
        return dispatch(client_fetchSchool(schoolId))
    }
}


function client_updateSchool(schoolId, school) {
    return dispatch => {
        return fetch(`${apiLocation()}/schools/${schoolId}`,
        putAPI(school))
        .then(response => {
            return response.status
        })
        .then(status => {
            if(status === 201){
                dispatch(fetchSchool(schoolId))
            }
        })
    }
}
export function updateSchool(schoolId, school) {
    return dispatch => {
        return dispatch(client_updateSchool(schoolId, school))
    }
}

function client_getAcademicYear() {
        return fetch(`${apiLocation()}/schools/years`,
            getAPI()
        )
            .then(response => {
                return response.json()
            })
}

export function getAcademicYear() {
        return client_getAcademicYear()
}