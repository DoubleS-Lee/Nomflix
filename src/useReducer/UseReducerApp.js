import React, { useReducer } from 'react';

const INCREMENT = "increment";
const DECREMENT = "decrement";

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case INCREMENT:
            return { count : state.count + 1 };
        case DECREMENT:
            return { count : state.count - 1 };
        default:
            throw new Error();
    }
};


export default function UseReducerApp () {
    const [state,dispatch] = useReducer(reducer,{count : 0});
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type : INCREMENT })}>Add</button>
            <button onClick={() => dispatch({ type : DECREMENT })}>Substract</button>
        </div>
    );
}