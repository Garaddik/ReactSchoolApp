import {SCHOOLS_LIST} from './actionType'
import {getAPI, apiLocation, postAPI} from '../commons/Util'

function recieveSchools(json){
    return {
        type: SCHOOLS_LIST,
        schools: json,
    }
}

function client_fetchSchools(searchString){
    return dispatch => {
        return fetch(`${apiLocation()}/schools/public?search=${searchString}&page=1`,
            getAPI()
        )
        .then(response => {
          return response.json()
        })
        .then(json => dispatch(recieveSchools(json)))
    }
}

export function fetchSchools(searchString){
    return dispatch =>{
        return dispatch(client_fetchSchools(searchString))
    }
}

function client_loginSuccess(userInfo){
        return fetch(`${apiLocation()}/loginsuccess`,
            postAPI(userInfo)
        )
        .then(response => {
            if(response.status === 401){
                alert("Not able to login")
            }    
            else
            return response.json()
        })    
}

export function loginSuccess(userInfo){
    return client_loginSuccess(userInfo)
}


