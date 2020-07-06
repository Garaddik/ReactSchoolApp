import {STANDARD_ATTENDANCE} from '../actions/actionType'

const AttendanceReducer = (state=[], action)=> {
    switch(action.type){
        case STANDARD_ATTENDANCE:
            return action.studentAttendanceList
        default:
            return state
    }
}

export default AttendanceReducer