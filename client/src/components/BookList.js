import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
    const [selected, setSelected] = useState(null);

    const renderList = () => {
        if(props.data.loading === true) {
            return <li>Loading...</li>
        }
        return props.data.books.map(item => (
                <li onClick={() => setSelected(item.id)} key={item.id}>Title: {item.name}</li>
        ))
    }
    return(
        <>
            <h1>Book List</h1>
            <ul>
                {renderList()}
            </ul>
            <hr/>
            <BookDetails bookId={selected}/>
        </>
    )
}

export default graphql(getBooksQuery)(BookList);
