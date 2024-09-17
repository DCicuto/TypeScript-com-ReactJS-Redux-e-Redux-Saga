import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../services/api';    
import { loadSuccess, loadFailure } from './actions';

// Aqui define o tipo d um repositório
interface Repository {
  id: number;
  name: string;
  // E posso adcionar outrso campos conforme necessario
}

//tipo da resposta da API
type ApiResponse = Repository[];

export function* load(): Generator<any, void, AxiosResponse<ApiResponse>> {
  try {
    const response: AxiosResponse<ApiResponse> = yield call(api.get, 'users/DCicuto/repos');   
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}