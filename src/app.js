 
const express = require('express');
const app = express();
const route = require('./routes');
const db = require('./app/config/db');


db.connect();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000/')
});