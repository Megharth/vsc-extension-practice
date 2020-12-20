import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const helloWorld = (
    <React.Fragment>
        <h1>Hello world</h1>
    </React.Fragment>
);

console.log(document.getElementById('root'));
ReactDOM.render(
    helloWorld,
    document.getElementById('root')
);
