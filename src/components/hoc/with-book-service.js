import React from 'react';
import {BooksServiceConsumer} from '../../servise-context/book-servise-context'

const withBookService = () => (ViewComponent) => {
        return (props) => {
            return <BooksServiceConsumer>
                {
                    (service) => {
                        return (
                            <ViewComponent {...props} service={service}/>
                        )
                    }
                }

            </BooksServiceConsumer>
        }
            ;
    }
;


export default withBookService;