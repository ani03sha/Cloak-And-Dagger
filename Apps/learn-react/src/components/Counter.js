import React from 'react';

const Counter = (props) => {
    const { count, increaseCount, decreaseCount, resetCount } = props
    return(
        <>
            <h3>Counter: {count}</h3>
            <button onClick={increaseCount}>+</button>
            <button  onClick={decreaseCount}>-</button>
            <button  onClick={resetCount}>Reset</button>
        </>
    );
}

export default Counter;