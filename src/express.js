
const express = require('express');
const app = express();
const routes = require('./routes')
app.use(routes)

const run = ()=>{
    const port = 8080 || 3000;
    app.listen(port,()=>{
        console.log("Server started at",port)
    })
}

run()

module.exports = {run}