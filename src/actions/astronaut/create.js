// Imports

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
    // TODO : DISPATCH AND FETCH
}
