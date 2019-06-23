import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxLGKAL4G4V-JqX1fy3J7rhZTRyQUkLIQ",
    authDomain: "portfolio-react-50d67.firebaseapp.com",
    databaseURL: "https://portfolio-react-50d67.firebaseio.com",
    projectId: "portfolio-react-50d67",
    storageBucket: "portfolio-react-50d67.appspot.com",
    messagingSenderId: "429410276458",
    appId: "1:429410276458:web:6e3040a7a65fcbca"
}
firebase.initializeApp(config)

ReactDOM.render(<App />,document.getElementById('root'));

