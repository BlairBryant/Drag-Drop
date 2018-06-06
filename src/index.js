import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Basic from './Basic'
// import DragonDrop from './DragonDrop'
import ReactDraggable from './ReactDraggable'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Basic />, document.getElementById('root'));
// ReactDOM.render(<DragonDrop />, document.getElementById('root'));
// ReactDOM.render(<ReactDraggable />, document.getElementById('root'));
registerServiceWorker();
