
import {SCHOOL_STAFF} from '../actions/actionType'

const StaffReducer = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_STAFF:
            return action.staffs
        default:
            return state
    }
}

export default StaffReducer