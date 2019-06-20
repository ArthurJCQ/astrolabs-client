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

        fetch('http://astronauts-labs.local/api/astronauts') // Call the API with the fetch function
        .then(response =>
            response
              .json()
              .then(retrieved => (retrieved))
          )
        .then((retrieved) => {
            // Your code for handling the data you get from the API
            dispatch(loading(false));
            dispatch(success(retrieved));

        })
        .catch(e => {
            // Handling data on erros
            dispatch(loading(false));
            dispatch(error(e.message));
        });
    }
}
