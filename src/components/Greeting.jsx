import React from "react";

const Greeting = ({ name, age }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Greeting name="Alice" age={25} />
            <Greeting name="Bob" age={30} />
        </div>
    );
};

export default Greeting;


