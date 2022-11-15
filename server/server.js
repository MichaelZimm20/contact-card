// import express.js
const express = require('express');

// initialize port 
const app = express();
const PORT = process.env.PORT || 3001;

// use server
`app.use(express.static('../client/dist/'))`
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use HTML route in htmlRoutes
require('./routes/htmlRoutes.js')(app);

// listen to server
app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});