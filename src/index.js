import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

ReactDOM.render(
    // <App posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
    <App state={state}/>,
  document.getElementById('root')
);

reportWebVitals();
