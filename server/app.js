const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const URL_MLAB = 'mongodb+srv://ryan1:test123@cluster0-8nozd.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

//allow cross origin requests
app.use(cors())

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
