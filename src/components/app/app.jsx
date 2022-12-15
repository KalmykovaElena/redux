import React from 'react';
import ErrorBoundary from "../error-boundary";
import BookService from "../../services/book-service";
import {BooksServiceProvider} from '../../servise-context/book-servise-context'
import {Provider} from "react-redux";
import store from "../../store";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import StoreHeader from "../store-header";
import {CartPage, HomePage} from "../../pages";

const service = new BookService()
const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <BooksServiceProvider value={service}>
                    <BrowserRouter>
                        <div>
                            <StoreHeader/>
                            <Switch>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/cart' component={CartPage}/>
                            </Switch>
                          </div>
                    </BrowserRouter>

                </BooksServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
};

export default App;