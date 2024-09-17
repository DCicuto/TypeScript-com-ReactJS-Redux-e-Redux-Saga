//Esse arquivo é responsável por combinar todos os reducers da aplicação em um único reducer.

import { combineReducers } from 'redux';
import repositories from './repositories';


export default combineReducers({
    repositories,
});

