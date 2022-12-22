import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import './book-list.css'
import withBookService from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indikator";
import {connect} from "react-redux";
import {bindActionCreators, compose} from 'redux'
import {booksError, booksLoaded, booksLoading, FETCH_BOOKS_LOADING, fetchBooks, onAddToCart} from "../action";

class BookList extends Component {

    componentDidMount() {
        // this.props.booksLoading()
        // this.props.service.getBooks()
        //     .then((data) => this.props.booksLoaded(data))
        //     .catch((error) => this.props.booksError(error))
        this.props.fetchBooks()
    }

    render() {
        const {isLoading, hasError, books, onAddToCart} = this.props
        if (isLoading) return <Spinner/>
        if (hasError) return <ErrorIndicator/>
        return (<ul className={'book-list'}>
            {books.map(book => {
                return (<li key={book.id}>
                    <BookListItem {...book} onAddToCart={onAddToCart}/>
                </li>)
            })
            }
        </ul>)
    };
};
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
// const {service} = ownProps
//     return {
//         booksLoading: () => dispatch(booksLoading()),
//         booksError: (error) => dispatch(booksError(error)),
//         booksLoaded: (books) => dispatch(booksLoaded(books)),
//
//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps
    return {
        fetchBooks: fetchBooks(service, dispatch),
        onAddToCart: (id) => dispatch(onAddToCart(id))
        // onAddToCart
    }
}
// const mapDispatchToProps = {
//         booksLoading,
//         booksError,
//         booksLoaded,
// }
// class BookList extends Component{
//    state={
//        books:[],
//        isLoading:true,
//        hasError:null
//    }
//    componentDidMount() {
//        this.props.service.getBooks()
//            .then((books)=>this.setState({
//                books,
//            isLoading:false}))
//            .catch(error=>this.setState({
//                hasError:error,
//                isLoading:false}))
//    }
//
//     render() {
//        const {isLoading, hasError,books} = this.state
//        if (isLoading) return <Spinner/>
//        if (hasError) return <ErrorIndicator/>
//      return( <ul className={'book-list'}>
//            {books.map(book => {
//                    return (<li key={book.id}>
//                        <BookListItem {...book}/>
//                    </li>)
//                })
//            }
//        </ul>)
//    };
// };

export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookList);