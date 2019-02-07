import { CAR_PROP_CHANGED } from './types';

export const propChanged = ({ prop, value }) => {
   return {
      type: CAR_PROP_CHANGED,
      payload: { prop, value }
   };
};
