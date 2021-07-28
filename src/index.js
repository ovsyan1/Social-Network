import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 'likes 23'},
    { id: 2, message: "It's my first post", likesCount: 'likes 56'},
    { id: 3, message: 'yo'},
    { id: 4, message: 'yo'},
    { id: 5, message: 'yo'},
    { id: 6, message: 'yo'}
  ];

  let dialogs = [
    { id: 1, name:'Dimych'},
    { id: 2, name: 'Andrew'},
    { id: 3, name:'Sveta'},
    { id: 4, name:'Sasha'},
    { id: 5, name:'Sasha'},
    { id: 6, name:'Valera'}
    ];

    let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'yo'},
    { id: 4, message: 'yo'},
    { id: 5, message: 'yo'},
    { id: 6, message: 'yo'}
    ];

ReactDOM.render(
  
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

reportWebVitals();
