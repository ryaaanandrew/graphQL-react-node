import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

const BookList = (props) => {
    const renderList = () => {
        if(props.data.loading === true) {
            return <li>Loading...</li>
        }
        return props.data.books.map(item => (
                <li key={item.id}>Title: {item.name}</li>
        ))
    }
    return(
        <>
            <h1>Book List</h1>
            <ul>
                {renderList()}
            </ul>
        </>
    )
}

export default graphql(getBooksQuery)(BookList);
