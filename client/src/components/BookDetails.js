import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const BookDetails = () => {
    return (
        <div>
            <p>output book details here</p>
        </div>
    )
}

export default BookDetails;