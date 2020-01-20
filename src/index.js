import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

    fetch('https://swapi.co/api/people',
    {method: "GET",
    headers: {"Content-Type": "application/json"}
    })
    .then( responseObject => responseObject.json())
    .then( (bodyData) => {
        console.log ("BodyData:" , bodyData);
        setTimeout(()=> {
            ReactDOM.render(<App />, document.getElementById('root'));

        }, 3000)

    }
    
    ); // end of second then
    




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
