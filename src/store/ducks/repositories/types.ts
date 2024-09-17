
/**
 * Types: São os tipos de ações que a action vai disparar, por enquanto vamos ter 3 tipos de ações: LOAD_REQUEST, LOAD_SUCCESS e LOAD_FAILURE. 
 */

/**
 * Data types: São os tipos de dados que a action vai receber, formato da infirmação que vai estar dentro do reducer, no nosso caso vai ser um array de repositórios. 
 * 
 */
export interface Repository {
    id: number;
    name: string;
}


/**
 * State type: É o tipo de estado que a action vai alterar
 * Como vai ser o formao do estado que que vou armazenar dentro do reducer, no nosso caso vai ser um array de repositórios, um booleano para saber se está carregando e um booleano para saber se deu erro e colocamos como readonly para que não possa ser alterado e sempre que seja alterado seja criado um novo estado.
 */
export interface RepositoriesState {
    readonly data: Repository[];
    readonly loading: boolean;
    readonly error: boolean;
}

/**
 * Action types: São os tipos de ações que a action vai disparar
 * O LOAD_REQUEST vai ser a funçao que nosso componente vai disparar para carregar os repositórios da API, isso vai ser ouvido pelo REDUX-SAGA que vai fazer a chamada na API e depois vai disparar  nossa action vamos disparar ou LOAD_SUCCESS ou LOAD_FAILURE. 
 */
export enum RepositoriesTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE',
    }

interface LoadRequestAction {
    type: typeof RepositoriesTypes.LOAD_REQUEST;
}

interface LoadSuccessAction {
    type: typeof RepositoriesTypes.LOAD_SUCCESS;
    payload: {
        data: Repository[];
    };
}

interface LoadFailureAction {
    type: typeof RepositoriesTypes.LOAD_FAILURE;
}

export type RepositoriesActions = LoadRequestAction | LoadSuccessAction | LoadFailureAction;



