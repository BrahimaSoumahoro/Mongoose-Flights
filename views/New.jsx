const React = require('react')

function New() {
    return (
        <div>
            <h1 text-align:center color='Yellow'>Enter your flight details here</h1>
        <form action='/Models/Flight.js' method='POST'>
            Name: <input type="text" name="airline" /> <br />
            Departinfo: <input type='date' 
             name="departs" /> <br />

            Flight <input type="text" name="flight#" />
            <input type='Submit' value="confirm your 
             fight" />



        </form>


        </div>
    )
}

module.exports= New; 