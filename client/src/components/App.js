import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './BookList';
import AddBook from './AddBook';
import BookDetails from './BookDetails';

// apollo set up

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});


const App = () => {
    return(
        <ApolloProvider client={client}>
            <div>
                <BookList />
                <hr></hr>
                <AddBook />
                <hr></hr>
                <BookDetails />
            </div>
        </ApolloProvider>
    )
};

export default App;
