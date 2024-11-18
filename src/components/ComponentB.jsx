import {useReducer, useState} from "react";

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
    }
}

function ComponentB() {
    const [count, setCount] = useState(0);
    const initialState = {count: 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Component B</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>{state.count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
}


export default ComponentB;