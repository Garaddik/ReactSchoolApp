import {SCHOOL_SUBJECTS} from '../actions/actionType'

const SubjectReducer = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_SUBJECTS:
            return action.subjects
        default:
            return state
    }
}

export default SubjectReducer