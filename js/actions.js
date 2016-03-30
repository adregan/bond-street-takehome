import { apiUrl, fieldsEndpoint, loginEndpoint, genericError, routes as ROUTES } from '../config';

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

export const initLogIn = (id) => {
  return dispatch => {
    dispatch(setInstitution(id));
    fetch(`${apiUrl}/${fieldsEndpoint}?institution_id=${id}`)
      .then(res => res.json())
      .then(json => dispatch(setLoginFields(json.login_fields)))
      .then(() => dispatch(changeRoute('login')))
      .catch(err => console.error(err));
  };
};

export const logIn = (formData) => {
  return dispatch => {
    dispatch(loading());
    fetch(`${apiUrl}/${loginEndpoint}`,{
      method: 'post',
      body: formData,
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    })
      .then(res => {
        res.json().then(body => {
          if (!res.ok) dispatch(displayError(body.error));
          else dispatch(changeRoute('routing'));
        });
      })
      .catch(err => {
        console.error(err);
        dispatch(displayError(genericError));
      })
      .then(() => dispatch(loaded()));
  };
};
