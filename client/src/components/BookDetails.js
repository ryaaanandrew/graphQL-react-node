import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {
    const renderBookDetails = () => {
        const { book } = props.data;

        if(book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author</p>
                    <ul>
                        {
                            book.author.books.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        return (
            <div>No book selected</div>
        )
    }

    return (
        <div>
            <p>{renderBookDetails()}</p>
        </div>
    )
}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);