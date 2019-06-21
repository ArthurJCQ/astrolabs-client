import { SubmissionError } from 'redux-form';

export function error(error) {
    return { type: 'ASTRONAUT_CREATE_ERROR', error };
}

export function loading(loading) {
    return { type: 'ASTRONAUT_CREATE_LOADING', loading };
}

export function success(created) {
    return { type: 'ASTRONAUT_CREATE_SUCCESS', created };
}

export function create(values) {
    return dispatch => {
        dispatch(loading(true));
        dispatch(error(''));
        console.log(JSON.stringify(values));
        return fetch('http://localhost/api/astronaut', { method: 'POST', body: JSON.stringify(values) })
          .then(response => {
            if (!response.ok) { throw response };
            dispatch(loading(false));
            return response.json();
          })
          .then(retrieved => dispatch(success(retrieved)))
          .catch(e => {
            dispatch(loading(false));
            if (e instanceof SubmissionError) {
              dispatch(error(e.errors._error));
              throw e;
            }
            dispatch(error(e.message));
          });
      };
}
