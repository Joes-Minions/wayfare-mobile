<<<<<<< HEAD
import { CAR_PROP_CHANGED } from '../../actionCreators/types';

const INITIAL_STATE = {
   year: '',
=======
import {
   CAR_PROP_CHANGED, CONFIRM_CAR_ADDED, CLEAR_CAR_FORM
} from '../../actionCreators/types';

const INITIAL_STATE = {
   year: '',
   color: '',
>>>>>>> 5ce3f15a675a33065f840a0f04b19a803b30992b
   make: '',
   model: ''
};

function SessionCarForm (state = INITIAL_STATE, action) {
   console.log(action);
   switch (action.type) {
      case CAR_PROP_CHANGED:
         return { ...state, [action.payload.prop]: action.payload.value };
<<<<<<< HEAD
=======
      // TODO TYUN: Might delete this later if I find there's no use for this...
      case CONFIRM_CAR_ADDED:
         return { ...state };
      case CLEAR_CAR_FORM:
         return INITIAL_STATE;
>>>>>>> 5ce3f15a675a33065f840a0f04b19a803b30992b
      default:
         return state;
   }
}

export default SessionCarForm;
