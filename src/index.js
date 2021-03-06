import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.module.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faArrowLeft, faArrowRight, faTasks, faBars, faHome,  faTimes, faCircleNotch, faCircle, faMapMarked, faMap, faLaptopCode, faHeadset, faHandsHelping, faCloud, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducerCreator from './Store/reducers/index'

import * as serviceWorker from './serviceWorker';
library.add(
  faTrash,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faTasks,
  faBars,
  faHome,
  fab,
  faTimes,
  faCircleNotch,
  faCircle,
  faMapMarked,
    faMap,
    faLaptopCode,
    faHeadset,
    faHandsHelping,
    faCloud,
    faCloudMoon
);

const rootReducer = combineReducers({
    uiReducer: reducerCreator.uiReducer,
    contentReducer: reducerCreator.contentReducer

})
// const composeEnhansers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose


const store = createStore(rootReducer, applyMiddleware(thunk));



    const app = (
        <Provider store={store}>
            <BrowserRouter>
           
                    <App />
           
              
            </BrowserRouter>
        </Provider>
    )


ReactDOM.render(app, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
