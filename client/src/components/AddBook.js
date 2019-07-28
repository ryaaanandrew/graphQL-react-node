import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = (props) => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const renderOptions = () => {
        if(props.getAuthorsQuery.loading === true){
            return <option>Loading options</option>
        }
        return props.getAuthorsQuery.authors.map(item => {
            return (
                <option key={item.id}>{item.name}</option>
            );
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    return (
        <form id='add-book' onSubmit={onSubmit}>
            <div className="field">
                <label >Book Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="field">
                <label >Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    {renderOptions()}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
