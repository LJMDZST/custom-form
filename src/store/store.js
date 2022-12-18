import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import thunk from 'redux-thunk';

import { pReducer } from '../reducers/pReducer';
/** Configuracion para trabajar con funciones asincronas en nuestra app */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    pReducer,    
   
});


export const  store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);