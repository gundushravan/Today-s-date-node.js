const express = require("express");
const app = express();

app.get("/",(Request,Response) =>{
    const dateTime = new Date();
    Response.send(`${dateTime.getDate()}-${dateTime.getMonth()+1}-${dateTime.getFullYear()}`);
});

module.exports = app;