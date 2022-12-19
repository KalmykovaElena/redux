import React from 'react';
import './book-list-item.css'
const BookListItem = (props) => {
    return (
        <div className={'book-list-item'}>
            <div className={'book-cover'}>
                <img src={props.coverImage} alt="img"/>
            </div>
            <div className={'book-details'}>
                <p className={'book-title'}>{props.title}</p>
                <p className={'book-author'}>{props.author}</p>
                <p className={'book-price'}>{props.price}</p>
                <button className={'btn btn-primary add-to-cart'}
                onClick={()=>{props.onAddToCart(props.id)}}
                >Add</button>
            </div>
        </div>
    );
};

export default BookListItem;