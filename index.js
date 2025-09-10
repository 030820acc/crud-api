const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongoDBString = "mongodb+srv://admin:FYirLB1WRq0HAtv3@backenddb.pndl5u7.mongodb.net/?retryWrites=true&w=majority&appName=backenddb"

mongoose.connect(mongoDBString).then(() => {
    console.log("connected")
    app.listen(3000, () => {
        console.log('server is active on port 3000')
    });
}).catch(() => {
    console.log("connection failed")
})

app.get('/', (req, res) => {
    res.send("hello")
});
