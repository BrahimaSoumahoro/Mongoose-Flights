const express = require('express')
require('dotenv').config
const mongoose = require('mongoose')
const connectToDB = require("./config/database")
const flights = require('./Models/FlightSchema')
const app = express()
const port = 3000

//*
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//* Setting a middleware to the routes
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// *
app.use(express.urlencoded({extended: false}))

// * Let set up the routes here!

app.get('', (req, res) =>{
     res.send('Welcome to ZamZiBa Luxury Flights')
})


app.get('/airlines', (req,res)=>{
    // Flight.find({}, (error, allFlights)=>{
    //     res.render('Flight/Index', {Flight: allFlights})
        res.send('<h1>Your flight  taking off soon, be reading not to miss it!</h1>')
    // })
})










app.listen(port, () => console.log(`Planes app are listening for incoming on port ${port}!`))