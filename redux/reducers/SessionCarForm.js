import {
   CAR_PROP_CHANGED,
   CONFIRM_CAR_ADDED,
   CLEAR_CAR_FORM,
   UPDATE_CAR_FORM,
   DELETE_CAR_FORM
} from '../../actionCreators/types';

const INITIAL_STATE = {
   year: '',
   color: '',
   make: '',
   model: ''
};

function SessionCarForm (state = INITIAL_STATE, action) {
   console.log(action);
   switch (action.type) {
      case CAR_PROP_CHANGED:
         return { ...state, [action.payload.prop]: action.payload.value };
      // TODO TYUN: Might delete this later if I find there's no use for this...
      case CONFIRM_CAR_ADDED:
         return { ...state };
      case CLEAR_CAR_FORM:
         return INITIAL_STATE;
      case UPDATE_CAR_FORM:
         return action.payload;
      case DELETE_CAR_FORM:
         return INITIAL_STATE;
      default:
         return state;
   }
}

export default SessionCarForm;
