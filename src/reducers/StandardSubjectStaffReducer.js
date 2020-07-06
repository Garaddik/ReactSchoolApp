import {SSS} from '../actions/actionType'

export const sss = (state=[], action)=> {
    switch(action.type){
        case SSS:
            return action.sss
        default:
            return state
    }
}