import {SCHOOL_TEMPLATE, UPLOAD_IMAGE} from '../actions/actionType'

const SchoolTemplateReducer = (state={}, action)=> {
    switch(action.type){
        case SCHOOL_TEMPLATE:
            return action.schoolTemplate
        case UPLOAD_IMAGE:
            return {...state, imagePath: action.imagePath}    
        default:
            return state    
    }
}

export default SchoolTemplateReducer