import { CAR_PROP_CHANGED } from '../../actionCreators/types';

const INITIAL_STATE = {
   year: '',
   make: '',
   model: ''
};

function SessionCarForm (state = INITIAL_STATE, action) {
   console.log(action);
   switch (action.type) {
      case CAR_PROP_CHANGED:
         return { ...state, [action.payload.prop]: action.payload.value };
      default:
         return state;
   }
}

export default SessionCarForm;
