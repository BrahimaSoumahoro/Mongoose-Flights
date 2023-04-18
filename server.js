// const express = require('express')
// require('dotenv').config
// const mongoose = require('mongoose')
// const connectToDB = require("./config/database")
// const flights = require('./Models/FlightSchema')
// const app = express()
// const port = 3000

// //*
// app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());

// //* Setting a middleware to the routes
// app.use((req, res, next) => {
//     console.log(req.url)
//     next()
// })
// // *
// app.use(express.urlencoded({extended: false}))

// // * Let set up the routes here!

// app.get('', (req, res) =>{
//      res.send('Welcome to ZamZiBa Luxury Flights')
// })


// app.get('/airlines', (req,res)=>{
//     // Flight.find({}, (error, allFlights)=>{
//     //     res.render('Flight/Index', {Flight: allFlights})
//         res.send('<h1>Your flight  taking off soon, be reading not to miss it!</h1>')
//     // })
// })

// app.listen(port, () => console.log(`Planes app are listening for incoming on port ${port}!`))

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const connectToDB = require('./config/db');
const Flight = require('./Models/Flight');


//============ Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
})
// Parsing incoming data from request
app.use(express.urlencoded({extended: false}));

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to ZamZiBa Luxury Flights!</h1>');
});

/**
 * Index Route
 */
app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights: allFlights})
    })
})

/**
 * New Route
 */
app.get('/flights/new', (req, res) => {
    res.render('New');
});

/**
 * Post Method
 */
app.post('/flights', (req, res) => {
    console.log(req.body);
    Flight.create(req.body).then(flight => {
        res.redirect('/flights')
    }).catch((error) => {
        console.error(error);
    });
});


//* app listener
app.listen(PORT, () => {
    console.log('Server is Up!');
    connectToDB();
});