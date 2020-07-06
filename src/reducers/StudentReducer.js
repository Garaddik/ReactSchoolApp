import {SCHOOL_STUDENTS, STUDENT_DETAILS} from '../actions/actionType'

export const students = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_STUDENTS:
            return action.students
        default:
            return state
    }
}

export const studentDetails = (state={}, action)=> {
    switch(action.type){
        case STUDENT_DETAILS:
            return action.studentDetails
        default:
            return state
    }
}