import { SET_INSTITUTION, LOADING, LOADED, CLEAR_ERROR, DISPLAY_ERROR, CHANGE_ROUTE } from './actions';
import { combineReducers } from 'redux';

const route = (state = 'connect', action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return action.route;
    default:
      return state;
  }
};

const error = (state = '', action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return '';
    case DISPLAY_ERROR:
      return action.msg;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
};

const institution = (state, action) => {
  switch (action.type) {
    case SET_INSTITUTION:
      return action.id;
    default:
      return state;
  }
};

export default combineReducers({route, error, loading, institution});
