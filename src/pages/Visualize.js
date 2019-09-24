import React, { Component } from 'react'

import api from '../services/api'

import './Visualize.css'

export default class Visualize extends Component {
    state = {
        equipamento: '',
        setor: '',
        data: '',
        descricao: '',
        solicitante: '',
        data_atend: '',
        status: '',
    }
    
    render(){
        return(
            <div className="visual">
                <article>
                    <label><strong>Equipamento: </strong></label>
                    <p>Trator</p>
                    <label><strong>Data de Abertura</strong></label>
                    

                </article>
            </div>
        )
    }
}