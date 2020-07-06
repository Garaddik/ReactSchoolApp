import {TOKEN} from '../actions/actionType'

export const token = (state={}, action)=> {
    switch(action.type){
        case TOKEN:
            return action.token
        default:
            return state
    }
}