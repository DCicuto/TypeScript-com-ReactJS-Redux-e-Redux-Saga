import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../services/api';    
import { loadSuccess, loadFailure } from './actions';

// Defina o tipo de um repositório
interface Repository {
  id: number;
  name: string;
  // Adicione outros campos conforme necessário
}

// Defina o tipo da resposta da API
type ApiResponse = Repository[];

export function* load(): Generator<any, void, AxiosResponse<ApiResponse>> {
  try {
    const response: AxiosResponse<ApiResponse> = yield call(api.get, 'users/DCicuto/repos');   
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}