import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import bookReducer from './reducers/bookReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    books: bookReducer,
});
//creating the store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;