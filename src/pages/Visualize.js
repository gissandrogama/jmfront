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
            <h1>Viasualizar OS</h1>
        )
    }
}