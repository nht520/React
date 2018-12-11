//store 库
import { createStore,compose } from 'redux';
import reducers from './reducers';

//使用redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  store = createStore(
    reducers,
    composeEnhancers()
);
export  default  store;