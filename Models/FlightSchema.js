
// const mongoose =require('mongoose')


// // creating the schema and setting the rules of creation 
// const FlightSchema = new mongoose.Schema({
//     airline: String,
    
//     category: {
//         type: String, 
//         enum:[ 'American', 'Southwest', 'United'],  
//         required:true    
//           },

//     FlightNumber: {
//         type: Number, 
//         Min: 10,
//         Max:9999,
//         required:true
//     },

//     Departs: {
//         type: Date,
//         require: true,
//         default: Date.now
//     }
// });


// const Flight = mongoose.model('Flight', FlightSchema);

// module.exports = FlightSchema;