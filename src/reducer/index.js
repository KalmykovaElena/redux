import {FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS} from "../components/action";

const initialState = {
    books: [],
    isLoading: true,
    hasError: null
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: null
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: action.payload,
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.payload,
            }
        default:
            return state
    }
}
