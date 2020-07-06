import {TIMETABLE} from '../actions/actionType'

export const timeTable = (state={}, action)=> {
    switch(action.type){
        case TIMETABLE:
            return action.timeTable
        default:
            return state
    }
}