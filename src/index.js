import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const authors =[
    {
        name: 'Mark Twain',
        imageUrl: 'images/marktwain.jpg',
        books: 'The Advneture of Finn'
    }
];

const state= {
    turnData: {
        author: authors[0],
        books:  authors[0].books
    }
};
ReactDOM.render(<App  state={{...state}}/>, document.getElementById('root'));
registerServiceWorker();
