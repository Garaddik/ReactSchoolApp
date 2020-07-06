import { STUDENT_ADDRESS } from '../actions/actionType'

export const studentAddress = (state=[], action)=> {
    switch(action.type){
        case STUDENT_ADDRESS:
            return action.studentAddress
        default:
            return state
    }
}