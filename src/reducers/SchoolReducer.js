import {SCHOOLS_LIST} from '../actions/actionType'

const SchoolReducer = (state=[], action)=> {
    switch(action.type){
        case SCHOOLS_LIST:
            return action.schools
        default:
            return state    
    }
}

export default SchoolReducer