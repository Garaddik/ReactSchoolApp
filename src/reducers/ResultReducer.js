import {STANDARD_RESULT, STUDENT_RESULT} from '../actions/actionType'

export const results = (state=[], action)=> {
    switch(action.type){
        case STANDARD_RESULT:
            return action.results
        default:
            return state    
    }
}
export const studentResult = (state=[], action)=> {
    switch(action.type){
        case STUDENT_RESULT:
            return action.studentResult
        default:
            return state    
    }
}