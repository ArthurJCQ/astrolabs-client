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
    // TODO : DISPATCH AND FETCH
}
