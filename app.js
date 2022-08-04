const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config()

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;
const start = () => {
    try {
        connectDB();
        app.listen(port, console.log(`godspped at port : ${port}... `));

    } catch (error) {
        console.log(error);
    }
}
start();
