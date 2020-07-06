import {EXAMS, ERROR, EXAM_STANDARD_LIST, EXAM} from '../actions/actionType'

export const exams = (state=[], action)=> {
    switch(action.type){
        case EXAMS:
            return action.exams
        default:
            return state
    }
}

export const errorCode = (state='', action)=> {
    switch(action.type){
        case ERROR:
            return action.errorCode
        default:
            return state
    }
}

export const examSchedule = (state={}, action)=> {
    switch(action.type){
        case EXAM_STANDARD_LIST:
            return action.examSchedule
        default:
            return state
    }
}

export const exam = (state={}, action)=> {
    switch(action.type){
        case EXAM:
            return action.exam
        default:
            return state
    }
}