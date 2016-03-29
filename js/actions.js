import { routes as ROUTES } from '../config';

/* ROUTE ACTION TYPES & ACTIONS */
export const CHANGE_ROUTE = 'CHANGE_ROUTE';

export const changeRoute = (route) => {
  if (ROUTES.includes(route)) {
    return {type: CHANGE_ROUTE, route};
  }
};


/* INSTITUTION ACTION TYPES & ACTIONS */
export const SET_INSTITUTION = 'SET_INSTITUTION';
export const CLEAR_INSTITUTION = 'CLEAR_INSTITUTION';

export const setInstitution = (id) => {
  return {type: SET_INSTITUTION, id};
};
export const clearInstitution = () => {
  return {type: CLEAR_INSTITUTION};
};

/* LOGIN ERROR ACTION TYPES & ACTIONS */
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';

export const clearError = () => {
  return {type: CLEAR_ERROR};
};

export const displayError = (msg) => {
  return {type: DISPLAY_ERROR, msg};
};


/* LOADING ACTION TYPES & ACTIONS */
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export const loading = () => {
  return {type: LOADING};
};

export const loaded = () => {
  return {type: LOADED};
};

