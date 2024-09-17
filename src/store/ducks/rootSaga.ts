import { all, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

// Defina a anotação de tipo de retorno da função geradora rootSaga
export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}