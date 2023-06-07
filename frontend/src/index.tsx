import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import container from './dependencies';
import {Provider} from 'inversify-react';

import 'reflect-metadata';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<React.StrictMode>
        <Provider container={container}>
            <App/>
        </Provider>
    </React.StrictMode>, rootElement);

    reportWebVitals(console.log);
} else {
    console.error("Root element 'root' not found in the document.");
}
