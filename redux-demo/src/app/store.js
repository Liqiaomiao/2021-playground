import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter-with-toolkit/counter.js';
import promiseMiddleware from 'redux-promise-middleware';
function logger({ getState }) {
  return next => action => {
    console.log('action', action)
      const returnVal = next(action);
    console.log('state when action is dispatched', returnVal);
    return returnVal;
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:[promiseMiddleware,logger]
});
