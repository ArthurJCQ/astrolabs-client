// Imports

export function error(error) {
    return { type: 'ASTRONAUT_LIST_ERROR', error };
}

export function loading(loading) {
    return { type: 'ASTRONAUT_LIST_LOADING', loading };
}

export function success(retrieved) {
    return { type: 'ASTRONAUT_LIST_SUCCESS', retrieved };
}

export function list() {
    return (dispatch) => {
        dispatch(loading(true));
        dispatch(error(''));

        fetch('http://localhost/api/astronauts') // Call the API with the fetch function
        .then(response => {
            if (!response.ok) { throw response };
            return response
              .json()
              .then(retrieved => (retrieved))
        })
        .then((retrieved) => {
            // Handle data get from API
            dispatch(loading(false));
            dispatch(success(retrieved));
        })
        .catch(err => {
            // Handling data on erros
            err.json().then((e) => {
                dispatch(loading(false));
                dispatch(error(e.error.exception[0].message));
            })
        });
    }
}
