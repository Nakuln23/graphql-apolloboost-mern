const express = require('express');
const app = express();
const graphqlHTTP = require ('express-graphql');
const port = 3500;
const cors = require ('cors');
const schema = require('./schema');

//Allow cross origin
app.use(cors())

// GraphQL middleware
app.use('/graphql',
    graphqlHTTP({
        schema,          // Takes a schema 
        graphiql: true   // Makes graphiql tool available for use
}))

// Running Server
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})



