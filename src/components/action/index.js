export const FETCH_BOOKS_LOADING = 'FETCH_BOOKS_LOADING'
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART'
export const ALL_BOOKS_REMOVE_FROM_CART = 'ALL_BOOKS_REMOVE_FROM_CART'
export const BOOK_REMOVE_FROM_CART = 'BOOK_REMOVE_FROM_CART'

export const booksLoading = () => ({type: FETCH_BOOKS_LOADING})
export const booksError = (error) => ({type: FETCH_BOOKS_ERROR, payload: error})
export const booksLoaded = (books) => ({type: FETCH_BOOKS_SUCCESS, payload: books})
export const fetchBooks = (service, dispatch) => () => {
    dispatch(booksLoading())
    service.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
}

export const onAddToCart = (id) => ({type: BOOK_ADDED_TO_CART, payload: id})
export const removeAllCart = (id) => ({type:ALL_BOOKS_REMOVE_FROM_CART, payload: id})
export const removeBookFromCart = (id) => ({type:BOOK_REMOVE_FROM_CART, payload: id})