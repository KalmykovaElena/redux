import React from 'react';
import './store-cart-table.css'
const StoreCartTable = () => {
    return (
        <div  className={'store-cart-table'}>
           <h2>Order</h2>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>BOOK!</td>
                    <td>3</td>
                    <td>100$</td>
                    <td>
                        <button className={'btn btn-outline-success btn-sm'}><i className={'bi bi-plus-circle'}/></button>
                        <button className={'btn btn-outline-warning btn-sm'}><i className={'bi bi-dash-circle'}/></button>
                        <button className={'btn btn-outline-danger btn-sm'}><i className={'bi bi-trash'}/></button>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StoreCartTable;