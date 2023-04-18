const React = require('react');

function New(){
    return(
        <div>
            <nav>
                <a href='/flights'>View Flights</a>
            </nav>
            <h1>Enter your flight info here</h1>
            <form action='/flights' method='POST'>
                Airline:<input type='text' name='airline'/>
                <br />
                Flight Number:<input type='text' name='flightNo'/>
                <br />
                Departs:<input type='Date' name='departs'/>
                <br />
                <input type='submit' value='Book flight?' />
            </form>
        </div>
    );
};

module.exports = New;