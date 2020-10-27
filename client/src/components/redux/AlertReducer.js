import {
  SET_TODO_ALERT,
  REMOVE_TODO_ALERT,
} from './actions/types';

const initialState = { alerts: [] };
export const alertReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TODO_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };

    case REMOVE_TODO_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(
          (alert) => alert.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
