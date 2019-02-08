<<<<<<< HEAD
import { CAR_PROP_CHANGED } from './types';
=======
import { CAR_PROP_CHANGED, CONFIRM_CAR_ADDED, CLEAR_CAR_FORM } from './types';
>>>>>>> 5ce3f15a675a33065f840a0f04b19a803b30992b

export const propChanged = ({ prop, value }) => {
   return {
      type: CAR_PROP_CHANGED,
      payload: { prop, value }
   };
};
<<<<<<< HEAD
=======

export const confirmCarAdded = () => {
   return {
      type: CONFIRM_CAR_ADDED
   };
};

export const clearCarForm = () => {
   return {
      type: CLEAR_CAR_FORM
   };
};
>>>>>>> 5ce3f15a675a33065f840a0f04b19a803b30992b
