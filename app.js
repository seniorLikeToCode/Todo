const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);

const port = 3000;
const start = () => {
    try {
        connectDB();
        app.listen(port, console.log(`server in listerning on port ${port}... `));
        console.log(`connnect to mongoDB...`);

    } catch (error) {
        console.log(error);
    }
}
start();
