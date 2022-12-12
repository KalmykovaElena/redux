import React from 'react';
import ErrorBoundary from "../error-boundary";
import BookService from "../../services/book-service";
import {BooksServiceProvider} from '../../servise-context/book-servise-context'
import {Provider} from "react-redux";
import store from "../../store";
import {BrowserRouter} from "react-router-dom";
const service = new BookService()
const App = () => {
    return (
        <Provider store={store}>
        <ErrorBoundary>
            <BooksServiceProvider>
                <BrowserRouter>
                    <div>
                        App
                    </div>
                </BrowserRouter>

            </BooksServiceProvider>
        </ErrorBoundary>
            </Provider>
    );
};

export default App;