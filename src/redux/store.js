import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import /* thunkMiddleware */ thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import addressReducer from './reducers/addressReducer';

export const history = createBrowserHistory();

const root = combineReducers({
    dataAddress: addressReducer,
});


// export let store = createStore(root);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default function generateStore(){
    const store = createStore( root, composeEnhancers( applyMiddleware(thunk) ) );
    return store;
}