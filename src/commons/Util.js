import {apiHost} from '../config'

export function getAPI() {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "GET"
    }
}

export function postAPI(data) {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
    }
}

export function postmultiPartAPI(data) {
    return {
        method: 'POST',
        body: data
    }
}

export function putAPI(data) {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    }
}

export function deleteAPI() {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    }
}
export function apiLocation(){
    return apiHost || "http://localhost:8080"
}

