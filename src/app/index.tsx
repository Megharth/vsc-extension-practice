import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloWorld = (props: any) => {
    const [count, setCounter] = React.useState(0);
    const {vscode} = props;

    React.useEffect(() => {
        const oldState = props.vscode.getState();
        if(oldState && oldState.count && oldState.count !== count) {
            setCounter(oldState.count);
        } 
        else {
            vscode.setState({count: 0});
        }
    }, []);

    const modifyCounter = (mode: String = 'increment') => {
        let newCount = 0;
        if(mode === 'increment') {
            newCount = count + 1;
        } else if(mode === 'reset') {
            newCount = 0;
        }  

        setCounter(newCount);
            vscode.setState({count: newCount});
    };

    return (
        <div>
            <h1>{`Count: ${count}`}</h1> 
            <button className="btn" onClick={() => {modifyCounter(); }}>Increment</button>
            <button className="btn" onClick={() => {modifyCounter('reset'); }}>Reset</button>
        </div>
    );
};

declare global {
    interface Window {
        acquireVsCodeApi(): any;
    }
}

const vscode = window.acquireVsCodeApi();

ReactDOM.render(
    <HelloWorld vscode={vscode} />,
    document.getElementById('root')
);
