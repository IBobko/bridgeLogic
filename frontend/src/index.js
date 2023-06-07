import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)), rootElement);
    reportWebVitals(console.log);
}
else {
    console.error("Root element 'root' not found in the document.");
}
