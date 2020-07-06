import {EVENT} from '../actions/actionType'

export const event = (state={}, action)=> {
    switch(action.type){
        case EVENT:
            return action.event
        default:
            return state
    }
}