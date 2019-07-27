const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const URL_MLAB = 'mongodb+srv://ryan1:test123@cluster0-8nozd.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

mongoose.connect(URL_MLAB, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => { 
    console.log(`Now listening on port 4000`);
});
