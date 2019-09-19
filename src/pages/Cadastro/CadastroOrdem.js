import React, { Component } from 'react'

import api from '../../services/api'

import './CadOrdem.css'

class CadOrdem extends Component {
    state = {
        equipamento: '',
        setor: '',
        data: '',
        descricao: '',
        solicitante: '',
    }

    handleSubmit = async e => {
        e.preventDefault()
        
        await api.post('/ordem', {
            equipamento: this.state.equipamento,
            setor: this.state.setor,
            data: this.state.data,
            descricao: this.state.descricao,
            solicitante: this.state.solicitante,        
        })

        this.props.history.push("/")
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <form id="new-os" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="equipamento"
                    placeholder="tipo de equipamento"
                    onChange={this.handleChange}
                    value={this.state.equipamento}
                />
                <input 
                    type="text"
                    name="setor"
                    placeholder="Qual setor"
                    onChange={this.handleChange}
                    value={this.state.setor}
                />
                <input 
                    type="date"
                    name="date"
                    placeholder="data de cadastro da os"
                    onChange={this.handleChange}
                    value={this.state.data}
                />
                <textarea
                    type="text"
                    rows="7"
                    cols="30"     
                    name="descricao"
                    placeholder="descrição do problema ..."
                    onChange={this.handleChange}
                    value={this.state.descricao}
                />
                <input 
                    type="text"
                    name="solicitante"
                    placeholder="Solicitante"
                    onChange={this.handleChange}
                    value={this.state.solicitante}
                />

                <button type="submit">Cadastrar</button>
            </form>
        )
    }
}

export default CadOrdem