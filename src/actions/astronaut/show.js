// Imports

export function error(error) {
    return { type: 'ASTRONAUT_SHOW_ERROR', error };
}

export function loading(loading) {
    return { type: 'ASTRONAUT_SHOW_LOADING', loading };
}

export function success(retrieved) {
    return { type: 'ASTRONAUT_SHOW_SUCCESS', retrieved };
}

export function retrieve(id) {
    return dispatch => {
        dispatch(loading(true));

        return fetch('http://localhost/api/astronaut/' + id)
          .then(response =>
            response
              .json()
              .then(retrieved => ({ retrieved }))
          )
          .then(({ retrieved }) => {
            dispatch(loading(false));
            dispatch(success(retrieved));

          })
          .catch(e => {
            dispatch(loading(false));
            dispatch(error(e.message));
          });
    };
}

export function reset() {
    return dispatch => {
      dispatch(loading(false));
      dispatch(error(null));
      dispatch(success(null));
    }
  }