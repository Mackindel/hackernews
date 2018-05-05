import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept();
}
