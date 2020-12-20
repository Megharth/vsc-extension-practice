import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloWorld = () => {
    const [count, setCounter] = React.useState(0);
    const incrementCounter = () => {
        setCounter(count + 1);
    };

    return (
        <div>
            <h1>{`Count: ${count}`}</h1> 
            <button className="btn" onClick={incrementCounter}>Increment</button>
        </div>
    );
};

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
