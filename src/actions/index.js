export const increment = (by) => {
    return {
        type: 'INCREMENT',
        payload: by
    };
}

export const decrement = (by) => {
    return {
        type: 'DECREMENT',
        payload: by
    };
}
