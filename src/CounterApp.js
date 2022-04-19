import React, { useState } from 'react';
import PropTypes from 'prop-types'
const  CounterApp = ( { value } ) => {
    
    const [counter, setCounter] = useState(value); // retorna los valores

    //handleAdd
    const handleAdd = () => {
        setCounter( counter+1 );
    }

    const handleSubstract = () => {
        setCounter( counter-1 );
    }

    const handleReset = () => {
        setCounter( value );
    }


    return (
    <>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>0</button>
        <button onClick={ handleSubstract }>-1</button>
        
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : 1,
    subtitulo : "subtitulo"
}

export default CounterApp