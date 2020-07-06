import {EVENTS} from '../actions/actionType'

export const events = (state=[], action)=> {
    switch(action.type){
        case EVENTS:
            return action.events
        default:
            return state
    }
}