import { CAR_PROP_CHANGED, CONFIRM_CAR_ADDED, CLEAR_CAR_FORM } from './types';

export const propChanged = ({ prop, value }) => {
   return {
      type: CAR_PROP_CHANGED,
      payload: { prop, value }
   };
};

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
