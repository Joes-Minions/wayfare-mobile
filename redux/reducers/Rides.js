import {
  ADD_RIDES,
  SET_RIDES,
  REMOVE_RIDES,
  SIGN_OUT_SUCCESS
} from '../../actionCreators/types'

/**
 * Reducer for currently available rides.
 *
 * @param {Array} state Current array of rides available to the user.
 * @param {String} action The new action being processed.
 */
function Rides (state = [], action) {
  switch (action.type) {
    case ADD_RIDES: // Add an array or rides to currently viewable rides.
      return state.concat(action.rides)
    case SET_RIDES: // Clear and set the currently viewable rides.
      return action.rides
    case REMOVE_RIDES:
      const rideIds = action.rides.map(ride => ride.id)
      return state.filter(ride => !rideIds.contains(ride.id))
    case SIGN_OUT_SUCCESS: // Clear state if the user signs out.
      return []
    default:
      return state
  }
}

export default Rides
