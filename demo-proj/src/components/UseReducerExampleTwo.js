import React, { useReducer } from 'react'

const initialState = {
    FirstCounter: 0,
    SecondCounter: 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return { ...state, FirstCounter: state.FirstCounter + action.value }
        case 'decrement':
            return { ...state, FirstCounter: state.FirstCounter - action.value }   
        case 'increment2':
            return { ...state, SecondCounter: state.SecondCounter + action.value }
        case 'decrement2':
            return { ...state, SecondCounter: state.SecondCounter + action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function UseReducerExampleTwo() {
    const [count,dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <h3>useReducer hook....with object in initialState</h3>
            <div>First Count : <b>{count.FirstCounter}</b></div>
            <div>Second Count : <b>{count.SecondCounter}</b></div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment By 5</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement By 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
