import {SCHOOL_STANDARDS} from '../actions/actionType'

const StandardReducer = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_STANDARDS:
            return action.standards
        default:
            return state
    }
}

export default StandardReducer