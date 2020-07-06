
import {SCHOOL_NONTEACHINGSTAFF} from '../actions/actionType'

const nonTeachingStaffs = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_NONTEACHINGSTAFF:
            return action.nonTeachingStaffs
        default:
            return state
    }
}

export default nonTeachingStaffs