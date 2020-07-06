import {STANDARD_TIMETABLE} from '../actions/actionType'

const TimetableReducer = (state=[], action)=> {
    switch(action.type){
        case STANDARD_TIMETABLE:
            return action.standardTimetable
        default:
            return state
    }
}

export default TimetableReducer