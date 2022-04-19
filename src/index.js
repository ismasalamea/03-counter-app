//React +18 
import React from 'react';
import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp';
import './index.css'

//Referencias al elemento
const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<CounterApp value={0}/>)



//Antes de React 18
//import React from 'react';
//import CounterApp from './CounterApp';
//import ReactDOM from 'react-dom'
//import './index.css'
//const divRoot = document.querySelector('#root');
//ReactDOM.render( <CounterApp value={0}/>, divRoot)

