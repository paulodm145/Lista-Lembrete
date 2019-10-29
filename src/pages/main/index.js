import React, { Component } from 'react';
import api from "../../services/api";
import './style.css'

export default class Main extends Component{

    /** O Estado é sempre um objeto */
    state = {
        lembretes: []
    }

    componentDidMount(){
        this.loadLembretes();
    }

    loadLembretes = async () => {
        const response = await api.get('lembrete');

        /** console.log(response.data); **/
        
        this.setState({ lembretes: response.data })
        /**Armazenando no Estado */

    };

    render() {

        /** DESESTRUTURAÇÃO */
        //const {  }

        return(
            <div className="lembrete-list">
                {this.state.lembretes.map(
                    lembrete => (
                      <article key={lembrete.id}>
                       
                       <p><strong>{ lembrete.prioridade }</strong></p>
                        <p>{ lembrete.conteudo }</p>
                        <p><small>{ new Date( lembrete.modificado*1000 ).toLocaleDateString() }</small></p>
                        

                        <a href="">ACESSAR</a>

                      </article> 
                   

                    )
                )}
            </div>
        )
    }
                


}