//Arquivo que conecta o componente RepositoryList com o Redux
//

import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";

import { RootState } from "../../store";

//A StateProps, mapeia o tipo das informações que vem através di mapStatetoProps do Redux
interface StateProps {
    repositories: Repository [];
}

//Na DispatchProps, vou mapear as funcões q vem através do mapDispatchToProps do Redux 
interface DispatchProps {
    loadRequest(): void;
}


type Props = StateProps & DispatchProps;


class RepositoryList extends Component <Props> {
    componentDidMount() {
        this.props.loadRequest();
    }
    
    render() {  
        const { repositories } = this.props;    
        
        return (
            <ul>
                {repositories.map((repository) => (
                    <li key={repository.id}>{repository.name}</li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);