
import {SCHOOL_TRACKS, DRIVER_DETAILS} from '../actions/actionType'

export const tracks = (state=[], action)=> {
    switch(action.type){
        case SCHOOL_TRACKS:
            return action.tracks
        default:
            return state
    }
}

export const driverDetails = (state=[], action)=> {
    switch(action.type){
        case DRIVER_DETAILS:
            return action.driverDetails
        default:
            return state
    }
}