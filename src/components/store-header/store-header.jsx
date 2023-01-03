import React from 'react';
import './store-header.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const StoreHeader = ({cartItems}) => {

    const itemsInCartCount = cartItems.length;
    const cartTotal = cartItems.reduce((acc,item)=>{
       return acc+=item.total
    },0)
    const cartTotalCount = cartItems.reduce((acc,item)=>{
       return acc+=item.count
    },0)

    return (
        <header className={'store-header'}>
            <Link className="logo text-dark" to='/'>
                Shop
            </Link>
            <span>Cart total:{cartTotal}</span>
            <Link className="shopping-cart" to='/cart'>
                <i className={'cart-icon bi bi-cart-fill'} /><span>{itemsInCartCount} items</span>
                <div>{cartTotalCount} : total count</div>
            </Link>
        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }

}

export default  connect(mapStateToProps)(StoreHeader);