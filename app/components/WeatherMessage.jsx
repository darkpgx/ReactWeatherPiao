var React = require('react');

//ES6 destructuring allow var {location, temp} = props; to be passed in to arrow function
var WeatherMessage = ({location,temp}) => {
    return (
        <div>
            <h3 className="text-center">It's {temp} F degrees in {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;
