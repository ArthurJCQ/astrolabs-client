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
    // TODO : DISPATCH AND FETCH
}