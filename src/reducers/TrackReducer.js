


const initialState = [
    'Smells like teen spirit',
    'Enter Sandman'
];

export function playlist(state = initialState, action) {

    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.playload
        ];
    }
    return state;
}