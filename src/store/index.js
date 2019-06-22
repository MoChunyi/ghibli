import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

// 如有initial state 则作为createStore的第三个参数，否则第二个参数
const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
        reducer,
        composeEnhancers(middleware)
    );
export default store;