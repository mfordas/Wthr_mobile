import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers';
import { middleware } from '../store/store';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

