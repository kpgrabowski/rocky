import ReactDOM from 'react-dom';
import {App} from "./components/app";
import React from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "../src/reducers/index";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);



