import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Hello World');

    //response.json([
        //'Lucas'
    //]);
});

app.listen(3333);