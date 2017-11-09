import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import WebFont from 'webfontloader';

import App from './components/App';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

WebFont.load({
    google: {
        families: ['Cabin', 'sans-serif']
    }
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
