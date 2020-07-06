import {GET_SCHOOL, ACADEMIC_YEARS, ACTIVE_YEAR} from '../actions/actionType'

export const school = (state={}, action)=> {
    switch(action.type){
        case GET_SCHOOL:
            return action.school
        default:
            return state
    }
}

export const years = (state=[], action)=> {
    switch(action.type){
        case ACADEMIC_YEARS:
            return action.years
        default:
            return state
    }
}

export const activeYear = (state={}, action)=> {
    switch(action.type){
        case ACTIVE_YEAR:
            return action.activeYear
        default:
            return state
    }
}