import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const HelloWorld = () => {
    const [count, setCounter] = React.useState(0);
    const incrementCounter = () => {
        setCounter(count + 1);
    };

    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <h1>{`Count: ${count}`}</h1> 
        </div>
    );
};
console.log(document.getElementById('root'));
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
