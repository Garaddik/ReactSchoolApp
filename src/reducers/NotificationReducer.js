import {NOTIFICATIONS} from '../actions/actionType'

export const notifications = (state=[], action)=> {
    switch(action.type){
        case NOTIFICATIONS:
            return action.notifications
        default:
            return state
    }
}