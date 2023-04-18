import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';
import { applyMiddleware } from 'redux';

    const store = createStore(rootReducer,applyMiddleware(thunk));

    
export default store;
