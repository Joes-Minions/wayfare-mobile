import {
    GET_STARTED_SHARE_RIDE,
    GET_STARTED_FIND_RIDE,
    UPDATE_FLOW_TYPE
} from './types'

    
export const renderShareRideFlow = ()=>{
    return (dispatch) =>{
        dispatch({type:  GET_STARTED_SHARE_RIDE})
    }
}
export const renderFindRideFlow = ()=>{
    
    return (dispatch) =>{
        dispatch({type:  GET_STARTED_FIND_RIDE})
    }
}

export const updateFlowType=({findOrShare})=>{
    return (dispatch) =>{
        dispatch({type:  UPDATE_FLOW_TYPE, payload:findOrShare})
    }
}


