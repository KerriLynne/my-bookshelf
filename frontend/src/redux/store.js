import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import bookReducer from './reducers/bookReducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    books: bookReducer,
    form: formReducer
});
//creating the store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;