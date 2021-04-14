const initState = {
    loading: false,
    items: [],
    error: null
}
export const postReducer = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}