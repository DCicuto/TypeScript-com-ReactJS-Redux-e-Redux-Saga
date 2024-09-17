import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

// Crie o middleware do saga

const sagaMiddleware = createSagaMiddleware();

// Configure o store com o middleware do saga
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Execute o saga principal
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
