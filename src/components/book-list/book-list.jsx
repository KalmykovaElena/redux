import React from 'react';
import BookListItem from "../book-list-item";
import './book-list.css'
import withBookService from "../hoc";

const BookList = (props) => {
    console.log(props)
    return (
        <ul className={'book-list'}>
            {
                props.service.getBooks().map(book => {
                    return (<li key={book.id}>
                        <BookListItem {...book}/>
                    </li>)
                })
            }
        </ul>
    );
};

export default withBookService()(BookList);